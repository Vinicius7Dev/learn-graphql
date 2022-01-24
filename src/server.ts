import path from 'path';
import { GraphQLServer } from 'graphql-yoga';

import resolvers from './resolvers';

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'graphql', 'schema.graphql'),
  resolvers,
});

// Run GraphQL server
server.start(() => {
  console.log('===> Server Started On PORT 4000 <===')
});
