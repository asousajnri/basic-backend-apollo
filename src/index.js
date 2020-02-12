require('dotenv/config');

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./graphql/scheme');
const resolvers = require('./graphql/resolvers');

require('./database');

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
});

server.listen(process.env.APOLLO_LISTEN).then(({ url, family }) => {
  console.log(`🚀  Server ready at: ${url} - Family: ${family}`);
});
