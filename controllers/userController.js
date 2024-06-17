const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find()
                .select('-__v');

            res.status(200).json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Get a user
    async getUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .populate('thoughts')
                .populate('friends')
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID!' });
            }

            res.status(200).json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

   // Create a user
   async createUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
},
// need update, delete, and adding/removing friends
};