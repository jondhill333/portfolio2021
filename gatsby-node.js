const path = require(`path`);

async function turnProjectsIntoPages({ graphql, actions }) {
  const projectTemplate = path.resolve("./src/templates/Project.js");

  const { data } = await graphql(`
    query {
      projects: allSanityProjects {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      path: `projects/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
    });
  });
}

exports.createPages = async (params) => {
  await turnProjectsIntoPages(params);
};
