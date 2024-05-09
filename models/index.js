const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

// User <1 - M> Post
User.hasMany(Post, {
    foreignKey: "author_id",
    onDelete: "CASCADE"
});
Post.hasOne(User, {
    foreignKey: "author_id",
    onDelete: "CASCADE"
});
// User <1 - M> Comment
User.hasMany(Comment, {
    foreignKey: "author_id",
    onDelete: "CASCADE"
});
Comment.hasOne(User, {
    foreignKey: "author_id",
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