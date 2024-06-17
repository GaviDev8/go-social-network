const router = require('express').Router();

const {
    getThoughts,
    getThought,
    createThought,
    // updateThought,
    // deleteThought,
    // addReaction,
    // deleteReaction
} = require('../../controllers/thoughtController');

// all post
router.route('/')
    .get(getThoughts)
    .post(createThought);

// individual id 
router.route('/:thoughtId')
    .get(getThought)
    // .put(updateThought)
    // .delete(deleteThought);

// likes on post
// router.route('/:thoughtId/reactions')
//     .post(addReaction);

// specific like
// router.route('/:thoughtId/reactions/:reactionId')
//     .delete(deleteReaction);

module.exports = router;