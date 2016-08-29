var Sequelize = require('sequelize');
console.log('establishing database');
var db = new Sequelize('blogbase', 'root', '');

var Post = db.define('Post', {
  author: Sequelize.STRING,
  content: Sequelize.STRING,
  model: Sequelize.STRING,
});

var Comment = db.define('Comment', {
  content: Sequelize.STRING,
  Author: Sequelize.STRING
});

// puts a UserId column on each Message instance
// also gives us the `.setUser` method available
// after creating a new instance of Message
Comment.belongsTo(Post, {foreignKey: 'id'});
// enables bi-directional associations between Users and Messages
Post.hasMany(Comment);


Comment.sync();
Post.sync();
// creates these tables in MySQL if they don't already exist. Pass in {force: true}
// to drop any existing user and message tables and make new ones.

exports.Comment = Comment;
exports.Post = Post;

