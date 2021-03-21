import ApolloClient from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

const headers = { 'x-hasura-admin-secret': 'thisisjustatest' };

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'https://instagram-clone-build-api.herokuapp.com',
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
