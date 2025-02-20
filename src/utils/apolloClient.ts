import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

console.log(process.env.GRAPHQL_BACKEND_URL)

const client = new ApolloClient({
  uri: process.env.GRAPHQL_BACKEND_URL || "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default client;
