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
        createUser: async (_, { username, email, password }) => {
          const hashedPassword = await bcrypt.hash(password, 10);
          return await User.create({ username, email, password: hashedPassword });
        },
    
        updateUser: async (_, { id, username, email, password }) => {
          const hashedPassword = await bcrypt.hash(password, 10);
          return await User.findByIdAndUpdate(
            id,
            { username, email, password: hashedPassword },
            { new: true }
          );
        },
    
        deleteUser: async (_, { id }) => {
          return await User.findByIdAndDelete(id);
        },
    
        login: async (_, { username, password }) => {
          const user = await User.findOne({ username });
          if (!user) {
            throw new Error("User not found");
          }
    
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error("Incorrect password");
          }
    
          // You could also implement JWT authentication and return a token here.
    
          return user;
        },
    
        logout: async () => {
          // If you implement JWT authentication, handle token revocation or expiration here.
    
          return true;
        },
      },
    };

module.exports = resolvers;