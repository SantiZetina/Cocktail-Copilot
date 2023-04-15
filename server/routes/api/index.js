const express = require('express');
const router = express.Router();
const generateRoutes = require('./generate-routes');
const instructionRoutes = require('./instruction-routes');
const userRoutes = require('./user-routes');
const chatRoutes = require('./chat-route');

router.use('/generate', generateRoutes);
router.use('/instructions', instructionRoutes);
router.use('/users', userRoutes);
router.use('/chat', chatRoutes);

module.exports = router;