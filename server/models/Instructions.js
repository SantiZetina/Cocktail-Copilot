const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InstructionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    ingredients: [
        {
            name: {
                type: String,
                required: true,
            },
            amount: {
                type: String,
                required: true,
            }
        }
    ],
    steps: {
        type: [String],
        required: true,
    },
    notes: {
        type: String,
    },
    imageUrl: {
        type: String,
    }

    });

const Instruction = mongoose.model("Instruction", InstructionSchema);

module.exports = Instruction;