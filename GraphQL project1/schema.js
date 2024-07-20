const { ApolloServer, gql } = require('apollo-server');

// Define your GraphQL schema
const typeDefs = gql`
  type Startup {
    name: String
    description: String
    founder: String
  }

  type Query {
    startups: [Startup]
  }
`;

// Hardcoded array of startup data
const startups = [
  {
    name: 'Startup A',
    description: 'Revolutionizing the tech industry.',
    founder: 'John Doe'
  },
  {
    name: 'Startup B',
    description: 'Innovating in healthcare technology.',
    founder: 'Jane Smith'
  }
];

// Define your resolvers
const resolvers = {
  Query: {
    startups: () => startups
  }
};

// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
