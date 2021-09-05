const router = require('express').Router();
const { User, Comment, Post } = require('../../models');

// post a new post
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

//post a new comment under a post
router.post('/comment', async (req, res) => {
  try {
    const commentData = await Comment.create({
      user_id:req.session.user_id,
      post_id:req.body.post_id,
      content:req.body.content
    });
    console.log(commentData)
      res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// edit a post 
router.put('/edit/:id', async (req, res) => {
  try {
    const postData = await Post.update(req.body,{
      where: {
        id: req.params.id
      }
    });
      res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a post 
router.delete('/delete/:id',async (req,res) => {
  try{
    const postData = await Post.destroy({
      where: {
        id:req.params.id
      }
    })
    res.status(200).json(postData)
  }
  catch(err){
    res.status(500).json(err)
  }
})

module.exports = router;
