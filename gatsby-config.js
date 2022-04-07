module.exports = {
  siteMetadata: {
    title: `Dan Bamikiya - Software Engineer`,
    description: `Dan Bamikiya is a Frontend focused software engineer`,
    author: `@danBamikiya`,
    // url: "https://www.danbamikiya.com",
    image: "/images/front.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dan-bamikiya`,
        short_name: `dan-bamikiya`,
        start_url: `/`,
        lang: `en`,
        background_color: `#f0f0f0`,
        theme_color: `#f0f0f0`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`,
        },
        localize: [
          {
            name: `About Me`,
            short_name: `About`,
            description: `View a short description of Dan Bamikiya`,
            start_url: `/about`,
            lang: `en`,
          },
          {
            name: `My Work`,
            short_name: `Work`,
            description: `View some of my recent work`,
            start_url: `/portfolio`,
            lang: `en`,
          },
          {
            name: `Contact Me`,
            short_name: `Contact`,
            description: `Let's talk, I'm very social!`,
            start_url: `/portfolio/#Contact`,
            lang: `en`,
          },
        ],
      },
    },
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: false,
        threshold: 0.5,
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
