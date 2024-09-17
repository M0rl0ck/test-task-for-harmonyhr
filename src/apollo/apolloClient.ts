import { ApolloClient, InMemoryCache } from "@apollo/client";

const BaseURL = "https://api.escuelajs.co/graphql";

const client = new ApolloClient({
  uri: BaseURL,
  cache: new InMemoryCache(),
});

export { client };
