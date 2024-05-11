# bloge

## Description
An express website using Handlebars.js and an MVC folder structure.

## The Result



## User Story
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria
GIVEN a CMS-style blog site...

WHEN I visit the site for the first time,
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.

WHEN I click on the homepage option,
THEN I am taken to the homepage.

WHEN I click on any other links in the navigation,
THEN I am prompted to either sign up or sign in.

WHEN I choose to sign up,
THEN I am prompted to create a username and password.

WHEN I click on the sign-up button,
THEN my user credentials are saved and I am logged into the site.

WHEN I revisit the site at a later time and choose to sign in,
THEN I am prompted to enter my username and password.

WHEN I am signed in to the site,
THEN I see navigation links for the homepage, the dashboard, and the option to log out.

WHEN I click on the homepage option in the navigation,
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created.

WHEN I click on an existing blog post,
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.

WHEN I enter a comment and click on the submit button while signed in,
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.

WHEN I click on the dashboard option in the navigation,
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post.

WHEN I click on the button to add a new blog post,
THEN I am prompted to enter both a title and contents for my blog post.

WHEN I click on the button to create a new blog post,
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post.

WHEN I click on one of my existing posts in the dashboard,
THEN I am able to delete or update my post and taken back to an updated dashboard.

WHEN I click on the logout option in the navigation,
THEN I am signed out of the site.

WHEN I am idle on the site for more than a set time,
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts.

## TODO

- [ ] Uses Handlebars.js
- [ ] Has user accounts with passwords
- [ ] Passwords are secure
- [ ] Logged-in Sessions time out eventually
- [ ] Deployed to Heroku

- [ ] VIEWS
    - [ ] Nav bar (always visible partial)
        - [ ] Homepage (logo/title link?)
        - [ ] Dashboard ("My Posts")
        - [ ] Login button (if not logged in)
        - [ ] Logout button (if logged in)
    - [ ] Homepage (default page whether logged in or not)
        - [ ] Always available regardless of login status
        - [ ] See all recent posts from all Users
        - [ ] Option to comment on posts
        - [ ] Prompt to Log In if any other actions
    - [ ] Dashboard (logged-in only)
        - [ ] See all recent posts by Logged-In User
        - [ ] "New Post" button
        - [ ] "Edit Post" button under each post
    - [ ] View Post (always available)
        - [ ] Title
        - [ ] Author
        - [ ] Contents
        - [ ] Comments
        - [ ] Add Comment button (redirects to login if not logged in)
    - [ ] Sign Up (modal?)
        - [ ] Requires username, password
        - [ ] Validate that username is unique
        - [ ] Validate that password is secure enough
        - [ ] Submit button
    - [ ] Login (modal?)
        - [ ] Requires username, password
        - [ ] Validate that username exists and password is correct
        - [ ] Starts a new session
    - [ ] Logout (modal?)
        - [ ] Returns to Homepage, ends session

- [x] MODELS
    - [x] User
        - [x] ID (primary key, int, auto_increment, unique)
        - [x] Username (string, unique)
        - [x] Password (string)
    - [x] Post
        - [x] ID (primary key, int, auto_incrememnt, unique)
        - [x] Title (string)
        - [x] Contents (string)
        - [x] AuthorID (foreign key, int, User.ID)
        - [x] DateCreated (datetime)
        - [x] WasEditted (bool, default false)
        - [x] DateLastEdited (datetime)
    - [x] Comment
        - [x] id (int, auto_increment, unique)
        - [x] Message (string)
        - [x] DateCreated (datetime)
        - [x] AuthorID (foreign key, int, User.ID)
        - [x] PostID (foreign key, int, Post.ID)
- [x] Write seeds

- [x] Users have many Posts
- [x] Posts have 1 User
- [x] Posts have many Comments
- [x] Comments have 1 Post