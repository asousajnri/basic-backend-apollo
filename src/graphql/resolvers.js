const User = require("../models/User");

module.exports = {
  Query: {
    users: () => User.findAll(),
    user: (_, { id }) => User.findOne({ where: { id: id } })
  },

  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email })
  }
};
