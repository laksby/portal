import { PageProps, graphql } from 'gatsby';
import { FC } from 'react';

export const IndexPage: FC<PageProps<Queries.IndexPageQuery>> = props => {
  const { data } = props;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allWorkTitleJson {
      edges {
        node {
          year
          month
          company
          position
          title
        }
      }
    }
    allWorkProjectJson {
      edges {
        node {
          index
          project
          role
          product
          industry
          activities
          techs
        }
      }
    }
  }
`;
