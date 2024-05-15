const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

//User.hasMany(Post, {
//    foreignKey: "user_id",
//    onDelete: "CASCADE"
//});
// User.hasMany(Comment, {
//     foreignKey: "user_id",
//     onDelete: "CASCADE"
// });
Post.hasOne(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});
Comment.hasOne(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});
// Post.hasMany(Comment, {
//     foreignKey: "post_id",
//     onDelete: "CASCADE"
// });
Comment.hasOne(Post, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
});


module.exports = { User, Post, Comment };