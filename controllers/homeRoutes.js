const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

// TODO: Add a comment describing the functionality of the withAuth middleware
// If your status is not logged in then you are redirected to login page
router.get('/',
  //withAuth, 
  async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [{ model: User }],
        // attributes: { exclude: ['password'] },
        order: [['createdAt', 'DESC']],
      });
      const posts = postData.map((post) => post.get({ plain: true }));
      console.log(posts)
      res.render('homepage', {
        posts,
        // TODO: Add a comment describing the functionality of this property
        // checks if session is logged in
        logged_in: req.session.logged_in,
        current_user: req.session.user_id
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
      attributes: { exclude: ['password'] },
      order: [['createdAt', 'DESC']],
      where: {
        user_id: req.session.user_id,
      }
    });
    if(postData.length>0){
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts)
    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
      current_user: req.session.user_id
    });
  }
  else{
    console.log('here is the dashboard')
    res.render('dashboard',{
      logged_in: req.session.logged_in,
      current_user: req.session.user_id
    })
  }
  } catch (err) {
    res.status(500).json(err);
  }
});

// route for new posts when they press new post button on dashboard
router.get('/newpost', withAuth, async (req, res) => {
  try {
    res.render('newpost', { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Route for individual posts to see comments (withAuth)
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comment }],
      attributes: { exclude: ['password'] },
    });
    const post = postData.get({ plain: true });
    // find comments associated to the post
    const commentData = await Comment.findAll({
      include: [{ model: User }],
      attributes: { exclude: ['password'] },
      where: {
        post_id: req.params.id
      }
    })
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render('post', {
      post,
      comments,
      logged_in: req.session.logged_in,
      current_user: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/edit/:id', async (req, res) => {
  const postData = await Post.findByPk(req.params.id, {
    include: [{ model: User }],
    attributes: { exclude: ['password'] },
  });
  const post = postData.get({ plain: true });
  res.render('editpost', {
    post,
    logged_in: req.session.logged_in,
    current_user: req.session.user_id
  });
});

router.get('/login', (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  // If logged in, you get the homepage. If not, redirects to login. 
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  // If logged in, you get the homepage. If not, redirects to login. 
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
