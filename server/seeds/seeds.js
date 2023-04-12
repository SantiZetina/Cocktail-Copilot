const { User, Instruction } = require('../models');
const userData = require('./userSeed');
const instructionData = require('./instructionSeed');
const connection = require('../config/connection');

const seedDatabase = async () => {
    try {
        // Delete existing data
        await User.deleteMany({});
        await Instruction.deleteMany({});

        //Seed sample data
        await User.create(userData);
        await Instruction.create(instructionData);

        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

seedDatabase();