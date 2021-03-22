import ApolloClient from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

const headers = { 'x-hasura-admin-secret': 'thisisjustatest' };

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss://instagram-clone-api-build.herokuapp.com/graphql',
    // uri: 'ws://localhost:4000/graphql',
    options: {
      reconnect: true,
      connectionParams: {
        headers,
      },
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
