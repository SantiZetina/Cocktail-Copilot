const express = require('express');
const router = express.Router();
const { 
    getAllInstructions,
    createInstruction,
    getInstructionById,
    updateInstruction,
    deleteInstruction,
} = require('../../controllers/instruction-controller');

router.route('/').get(getAllInstructions).post(createInstruction);

router.route('/:id').get(getInstructionById).put(updateInstruction).delete(deleteInstruction);


module.exports = router;