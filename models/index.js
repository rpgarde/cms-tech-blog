const User = require('./User');
const Post = require('./Post')
const Comment = require('./Comment')

// one user can have many posts 
User.hasMany(Post,{
    foreignKey:'user_id'
})

Post.belongsTo(User,{
    foreignKey:'user_id'
})

// one user can have many comments 
User.hasMany(Comment,{
    foreignKey: 'user_id'
})

Comment.belongsTo(User,{
    foreignKey: 'user_id'
})

// one post can have many comments 
Post.hasMany(Comment,{
    foreignKey:'post_id'
})

Comment.belongsTo(Post,{
    foreignKey:'post_id'
})

module.exports = { User , Post, Comment};
