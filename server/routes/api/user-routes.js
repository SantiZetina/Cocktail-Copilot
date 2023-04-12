const express = require('express');
const router = express.Router();
const { 
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    login,
    logout,
    signup,
} = require('../../controllers/user-controller');

router.route('/').post(createUser).get(getAllUsers);
router.route('signup').post(signup);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;