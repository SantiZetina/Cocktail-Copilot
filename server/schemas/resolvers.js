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
        },
        getFavoriteInstructions: async (_, { userId }) => {
          const user = await User.findById(userId).populate("favorites");
          return user.favorites;
        },
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
    
        login: async (_, { email, password }) => {
          const user = await User.findOne({ email });
          if (!user) {
            throw new Error("User not found");
          }
        
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error("Incorrect password");
          }
        
          
          return { id: user.id, username: user.username, email: user.email };
        },
        
    
        logout: async () => {
          
    
          return true;
        },
      },
    };

module.exports = resolvers;