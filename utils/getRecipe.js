
import { gql } from "@apollo/client";

export const GET_RECIPE = gql`
  query recipe($recipeId: Int) {
		recipes(contentID: $recipeId){
      fields{
        title
        image {
          url
        }
        author {
          fields {
            name
          }
        }
        tag {
          fields {
            title
          }
        }
        date
        timeToCook
        servings
        tools {
          fields {
            title
            image {
              url
            }
          }
        }
        ingredients {
          fields {
            ingredient
          }
        }
        steps {
          fields {
            step
          }
        }
      }
		}
	}
`;