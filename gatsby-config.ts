import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  pathPrefix: `/portal`,
  siteMetadata: {
    title: `laksby`,
    siteUrl: `https://laksby.github.io/portal/`,
  },
  graphqlTypegen: true,
  plugins: [],
};

export default config;
