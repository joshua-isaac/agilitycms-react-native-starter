import config from "../config";

import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

  export const client = new ApolloClient({
    uri: `https://api.aglty.io/v1/5879e0cc-u/preview/en-us/graphql`,
    cache: new InMemoryCache(),
    headers: {
      apiKey: config.AGILITY_API_KEY
    }
  });
  