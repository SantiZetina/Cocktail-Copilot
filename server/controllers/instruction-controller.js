const { model } = require("mongoose");
const { Instruction } = require("../models/Instructions");

const getAllInstructions = async (req, res) => {
    try{
        const instructions = await Instruction.find({});
        res.status(200).json(instructions);
    } catch (err) {
        res.status(500).json(err);
    }
};

const createInstruction = async (req, res) => {
    try {
        const newInstruction = await Instruction.create(req.body);
        res.status(201).json(newInstruction);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getInstructionById = async (req, res) => {
    try {
        const instruction = await Instruction.findById(req.params.id);
        if(!instruction) {
            return res.status(404).json({ message: "No instruction found with this id!" });
        }
        res.status(200).json(instruction);
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateInstruction = async (req, res) => {
    try {
        const updatedInstruction = await Instruction.findByIdAndUpdate(req.params.id, req.body, {
            new: true,  
            runValidators: true,
        });
        if (!updatedInstruction) {
            return res.status(404).json({ message: "No instruction found with this id!" });
        }
        res.status(200).json(updatedInstruction);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteInstruction = async (req, res) => {
    try {
        const deletedInstruction = await Instruction.findByIdAndDelete(req.params.id);
        if (!deletedInstruction) {
            return res.status(404).json({ message: "No instruction found with this id!" });
        }
        res.status(200).json(deletedInstruction);
    } catch (err){
        res.status(500).json(err);
    }
}


module.exports = { 
    createInstruction,
    getAllInstructions,
    getInstructionById,
    updateInstruction,
    deleteInstruction,
 };