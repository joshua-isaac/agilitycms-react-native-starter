import { gql } from '@apollo/client';

export const GET_RECIPES = gql`
  query {
    recipes {
      contentID
      fields {
        image {
          url
        }
        title
        timeToCook
        tag {
            fields {
                title
            }
        }
      }
    }
  }
`;