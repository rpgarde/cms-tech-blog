const router = require('express').Router();
const { User , Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

// TODO: Add a comment describing the functionality of the withAuth middleware
// If your status is not logged in then you are redirected to login page
router.get('/', 
  //withAuth, 
  async (req, res) => {
  try {
    const postData = await Post.findAll({
      include:[ {model:User}],
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
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include:[ {model:User}],
      // attributes: { exclude: ['password'] },
      order: [['createdAt', 'DESC']],
      where:{
        user_id:req.session.user_id,
      }
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts)
    res.render('dashboard', {
      posts,
      // TODO: Add a comment describing the functionality of this property
      // checks if session is logged in
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Route for individual posts to see comments (withAuth)
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id,{
      include:[ {model:User},{model:Comment}],
      attributes: { exclude: ['password'] },
      // order: [['createdAt', 'DESC']],
    });
    const post = postData.get({ plain: true });
    console.log(post)
    res.render('post', {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
