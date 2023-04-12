const { User, Instruction } = require("../models");

const resolvers = {
    Query: {
        getAllUsers: async () => {
            return await User.find({});
        },
        getUserById: async (_, { id }) => {
            return await User.findById(id);
        },
        getAllInstructions: async () => {
            return await Instruction.find({});
        }
    }, 

    Mutation: {
    // mutations go here
    },
}

module.exports = resolvers;