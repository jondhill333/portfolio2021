const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

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
    {
      // this is the name of the plugin you are adding
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ymtz527a",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
