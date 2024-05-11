const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

User.hasMany(Post);
User.hasMany(Comment);

Post.hasOne(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});
Comment.hasOne(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

// Post <1 - M> Comment
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
});
Comment.hasOne(Post, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
});


module.exports = { Comment, Post, User };