const sequelize = require('../config/connection');
const { Comment, Post, User } = require('../models');

const userSeedData = require('./userSeedData.json');
const postSeedData = require('./postSeedData.json');
const commentSeedData = require('./commentSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  
  //process.exit(0);

  let posts = [];
  for (const post of postSeedData) {
    const newPost = await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id
    });
    posts.push(newPost);
  }

  
  //process.exit(0);

  let comments = [];
  for (const comment of commentSeedData) {
    const newComment = await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      post_id: posts[Math.floor(Math.random() * posts.length)].id
    });
    comments.push(newComment);
  }

  process.exit(0);
};

seedDatabase();
