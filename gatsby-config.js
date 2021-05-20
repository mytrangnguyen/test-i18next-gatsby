/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`);
const themeConfig = require("./src/configs/theme.json");
require("dotenv").config();

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Anubis",
    titleTemplate: "Anubis",
    description: "Anubis",
    url: "Anubis",
    image: "/images/snape.jpg",
    ownerSite: "Anubis",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/@uikit/layouts/Wrapper.js`),
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        images: path.join(__dirname, "src/images"),
        components: path.join(__dirname, "src/components"),
        configs: path.join(__dirname, "src/configs"),
        "@uikit": path.join(__dirname, "src/@uikit"),
        "@redux": path.join(__dirname, "src/@redux"),
        containers: path.join(__dirname, "src/containers"),
        utils: path.join(__dirname, "src/utils"),
        api: path.join(__dirname, "src/api"),
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          modifyVars: {
            "@font-family": themeConfig.fonts.primary,
            "primary-color": themeConfig.palette.primary,
            "table-header-bg": themeConfig.background.headerTable,
            "table-header-color": themeConfig.text.headerTable,
            "layout-body-background": "#ffffff",
            "@btn-height-base": "45px",
            "@input-height-base": "45px",
            "@border-radius-base": "10px",
          },
          javascriptEnabled: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `locales`),
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`fr`],
        defaultLanguage: `fr`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://example.com/`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["fr"],
          },
          {
            matchPath: "/preview",
            languages: ["fr"],
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
