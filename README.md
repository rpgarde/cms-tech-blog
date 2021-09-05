# CMS Tech Blog
![license](https://img.shields.io/github/license/rpgarde/ecommerce-backend)

## Description
This is a full-stack tech blog which allows you to read, create, edit, and delete blog posts and comments. This also contains user authentication, allowing for signup / login. 

See deployed app [here](https://protected-tor-62513.herokuapp.com/) and video walkthrough [here](https://drive.google.com/file/d/1Q27XAjGjhfmWaiygU-tDQv3-RtCjfPsn/view).

![screenshot](./assets/home-screenshot.png)

## Table of Contents 
* [Technology](#technology)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Questions](#questions)

## Technology 
* Handlebars
* Bootstrap
* Sequelize ORM
* Node.js
* Express
* Bcrypt

## Installation
If you want to run this locally on your machine:
* Clone / fork to your local machine
* Start by creating the databases by running SOURCE schema.sql;
* Change the .env.example to a .env file with your MySQL credentials
* Type npm i on your terminal to install all dependencies
* Type npm run seed to seed the database
* Type npm start to run the application
* Go to http://localhost:3001/ to use the application

## Usage
See walkthrough video [here](https://drive.google.com/file/d/1Q27XAjGjhfmWaiygU-tDQv3-RtCjfPsn/view) and deployed app [here](https://protected-tor-62513.herokuapp.com/)

Notes on usage:
* If you are logged out, you're able to view posts and comments
* If you are logged in, you're able to view posts, and inside the post, add / edit / delete comments
* If you are logged in, you're able to create/edit/delete posts via the Dashboard section

Use test user if you want to login, otherwise just sign up and create your own account. 
* username: testuser
* password: password12345

## License
This project uses MIT license.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Questions
For any further questions, reach out to rpgarde@gmail.com or visit my [Github profile](https://github.com/rpgarde).