module.exports = {
  siteMetadata: {
    title: "Jon Hill",
    // siteUrl: "",
    description: "Jon Hill web developer portfolio site",
    twitter: "@jon_hill33",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
