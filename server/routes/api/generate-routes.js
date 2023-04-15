const express = require("express");
const userRoutes = require("./user-routes");
const instructionRoutes = require("./instruction-routes");
const chatRoutes = require("./chat-route");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/instructions", instructionRoutes);
router.use("/chat", chatRoutes);

module.exports = router;
