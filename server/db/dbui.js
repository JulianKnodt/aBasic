var db = require('./sql.js');
console.log('get/post ready');

module.exports = {
  Posts: {
    get: function (req, res) {
      db.Post.findAll()
        .then(function(posts) {
          res.json(posts);
        });
    },
    post: function (req, res) {
      db.Post.findOrCreate({where: {username: req.body.username}})
        // findOrCreate returns multiple results in an array
        // use spread to assign the array to function arguments
        .spread(function(results, created) {
          db.Post.create({
            id: results.get('id'),
            content: req.body.content,
            model: req.body.model,
            authoer: req.body.author || 'anonymous'
          }).then(function(message) {
            res.sendStatus(201);
          });
        });
    }
  },

  Comments: {
    get: function (req, res) {
      db.Comment.findAll({include: [db.Post]})
        .then(function(Comments) {
          res.json(Comments);
        });
    },
    post: function (req, res) {
      db.User.findOrCreate({where: {
        content: req.body.content,
        author: req.body.author || 'anonymous'
      }})
        // findOrCreate returns multiple resutls in an array
        // use spread to assign the array to function arguments
        .spread(function(user, created) {
          res.sendStatus(created ? 201 : 200);
        });
    }
  }
};