import { gql } from '@apollo/client';

const REPOSITORY_FRAGMENTS = gql`
  fragment RepositoryFields on Repository {
    name
    owner {
      login
    }
    description
    stargazerCount
    forkCount
  }
`;

export const SEARCH_REPOSITORIES_QUERY = gql`
  query SearchRepositories(
    $searchTerm: String = "is:public"
    $first: Int = 20
  ) {
    search(query: $searchTerm, type: REPOSITORY, first: $first) {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENTS}
`;
