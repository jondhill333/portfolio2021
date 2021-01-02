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

async function turnLanguagesIntoPages({ graphql, actions }) {
  const languageTemplate = path.resolve("./src/pages/projects.js");

  const { data } = await graphql(`
    query {
      languages: allSanityLanguage {
        nodes {
          name
          id
        }
      }
    }
  `);
  data.languages.nodes.forEach((language) => {
    actions.createPage({
      path: `language/${language.name}`,
      component: languageTemplate,
      context: {
        language: language.name,
        languageRegex: `/${language.name}/i`,
      },
    });
  });
}

// async function turnToppingsIntoPages({ graphql, actions }) {
//   const toppingTemplate = path.resolve('./src/pages/pizzas.js');
//   const { data } = await graphql(`
//     query {
//       toppings: allSanityTopping {
//         nodes {
//           name
//           id
//         }
//       }
//     }
//   `);
//   data.toppings.nodes.forEach((topping) => {
//     actions.createPage({
//       path: `topping/${topping.name}`,
//       component: toppingTemplate,
//       context: {
//         topping: topping.name,
//         toppingRegex: `/${topping.name}/i`,
//       },
//     });
//   });
// }

exports.createPages = async (params) => {
  await Promise.all([
    turnProjectsIntoPages(params),
    turnLanguagesIntoPages(params),
  ]);
};
