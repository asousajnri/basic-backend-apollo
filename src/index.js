require('dotenv/config');
require('./database');

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./graphql/scheme');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
});

server.listen(process.env.APOLLO_LISTEN).then(({ url, family }) => {
  console.log(`🚀 Server ready at: ${url} - Family: ${family}`);
});
