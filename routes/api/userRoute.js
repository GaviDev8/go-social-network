const router = require('express').Router();

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// all users
router.route('/')
    .get(getUsers)
    .post(createUser);

// user id
router.route('/:userId')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

// follower id
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;