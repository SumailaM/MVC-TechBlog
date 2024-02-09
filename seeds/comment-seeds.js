const { Comment } = require('../models');

const commentdata = [
    {
        comment: 'I\'ll be there!',
        user_id: 2,
        post_id: 1
    },
    {
        comment: 'Great, see you there!',
        user_id: 1,
        post_id: 1
    },
    {
        comment: 'lets see what being thougth of ',
        user_id: 5,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;