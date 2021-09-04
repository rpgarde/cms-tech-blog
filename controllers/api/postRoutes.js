const router = require('express').Router();
const { User, Comment, Post } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      user_id:req.session.user_id,
      title:req.body.title,
      content:req.body.content
    });
      res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/comment', async (req, res) => {
  try {
    const commentData = await Comment.create({
      user_id:req.session.user_id,
      post_id:req.body.post_id,
      content:req.body.content
    });
      res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
