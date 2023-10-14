import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `laksby`,
    siteUrl: `https://laksby.github.io/portal/`,
    pathPrefix: `/portal`,
  },
  graphqlTypegen: true,
  plugins: [],
};

export default config;
