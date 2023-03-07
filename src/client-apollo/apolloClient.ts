import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';

const cache = new InMemoryCache();
const url = createHttpLink({
  uri: '/graphql',
});

const apolloClient = new ApolloClient({
  link: url,
  cache,
});

export default apolloClient;
