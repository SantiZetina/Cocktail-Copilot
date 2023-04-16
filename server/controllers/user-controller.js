const User = require("../models/User");

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).json({ message: "No user found with this id!" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedUser) {
            return res.status(404).json({ message: "No user found with this id!" });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "No user found with this id!" });
        }
        res.status(200).json(deletedUser);
    } catch (err){
        res.status(500).json(err);
    }
}

const signup = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        console.error("Error in signup function:", err); 
        res.status(500).json(err);
    }
};



const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user) {
            return res.status(404).json({ message: "No user found with this email address!" });
        }

        const isMatch = await user.comparePassword(req.body.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password!" });
        }

        
        res.status(200).json({ message: "Logged in succesfully", id: user._id })
    } catch (err) {
        res.status(500).json(err);
    }
}

const logout = async (req, res) => {
    try {
        // Destroy token
        res.status(200).json({ message: "Logged out succesfully"})
    } catch (err) {
        res.status(500).json(err);
    }
}



module.exports = { 
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    signup,
    login,
    logout,
 };