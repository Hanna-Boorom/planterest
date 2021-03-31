# Planterest :herb:


**Planterest** is a Pinterest-like image board app for plant lovers! A full-stack, full CRUD web application built with a Ruby on Rails backend and a React frontend. Planterest is my final project as a student of the General Assembly (GA) Software Engineering Immersive course. This app represents the culmination of all the skills I've learned during my time at GA. 


<br>

## MVP

Once MVP is met, users will be able to view posts, but won't be able to add their own posts or boards. Conversely, when logged in, users will be able to view their own boards and posts as well as add, edit, and delete both boards and posts.

Planterest will be fully responsive on both desktop and mobile and be both beautiful and easy to use. 

<br>

### Goals

- User can view only a select few posts on homepage without being logged in
- When logged in, User will be able to create board(s) and add posts to the board(s)
- User can view, add, edit, or delete boards and/or posts
- App will be fully responsive on both desktop and mobile
<br>

### Libraries and Dependencies


|     Library      | Description                                                                    |
| :--------------: | :----------------------------------------------------------------------------  |
|      React        | A frontend component library used to render the client-facing side of the app |
|   React Router Dom   | Allows for easy routing in React                                           |
|      Axios       | Used to make HTTP requests from the browser                                    |
|      Rails       | Used in conjunction with Ruby to create a server-side application              |
|      Bcrypt      | Used to enable encryption easily                                               |
|       JWT        | Uses Json Web Token (JWT) for token based authentication                       |


<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Landing](https://xd.adobe.com/view/77a47322-62ef-47ac-a15e-d7f38e4929d9-22f7/?fullscreen)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree
![Component Tree](https://github.com/Hanna-Boorom/planterest/blob/main/Component%20Tree.png)

#### Component Architecture

``` structure

src
|__ App.js/
|__ components/
      |__ shared
            |__ Layout.jsx  
|__ screens/
      |__ Login.jsx
      |__ Register.jsx
      |__ Boards.jsx
      |__ BoardDetail.jsx
      |__ BoardCreate.jsx
      |__ BoardEdit.jsx
      |__ Posts.jsx
      |__ PostDetail.jsx
      |__ PostCreate.jsx
      |__ PostEdit.jsx
|__ screens/
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase



## Code Issues & Resolutions

