# Planterest :herb:

**Planterest** is a Pinterest-like image board app for plant lovers! A full-stack, full CRUD web application built with a Ruby on Rails backend and a React frontend. Planterest is my final project as a student of the General Assembly (GA) Software Engineering Immersive course. This app represents the culmination of all the skills I've learned during my time at GA.

<br>

## MVP

Once MVP is met, when logged in, users will be able to view their own boards and posts as well as add, edit, and delete both boards and posts.

Planterest will be fully responsive on both desktop and mobile and be both beautiful and easy to use.

<br>

### Goals

- User will be able to successfully create and account and log in
- When logged in, User will be able to create board(s) and add posts to the board(s)
- User can view, add, edit, or delete boards and/or posts
- App will be fully responsive on both desktop and mobile
  <br>

### Challenges

This will be the largest app I've made on my own, so I'm a bit intimidated going into the project. I think my biggest challenge will be getting everything done and looking the way I want it to within the week timeframe.
<br>

### Libraries and Dependencies

|     Library      | Description                                                                   |
| :--------------: | :---------------------------------------------------------------------------- |
|      React       | A frontend component library used to render the client-facing side of the app |
| React Router Dom | Allows for easy routing in React                                              |
|   React Icons    | Use icons from FontAwesome and other icon services as components              |
|      Axios       | Used to make HTTP requests from the browser                                   |
|      Rails       | Used in conjunction with Ruby to create a server-side application             |
|      Bcrypt      | Used to enable encryption easily                                              |
|       JWT        | Uses Json Web Token (JWT) for token based authentication                      |

<br>

### Client (Front End)

#### Wireframes

<details><summary>Landing</summary>
      
![Landing](https://github.com/Hanna-Boorom/planterest/blob/main/README-images/Landing%20Wireframes.png)

</details>

<details><summary>Login</summary>
      
![Login](https://github.com/Hanna-Boorom/planterest/blob/main/README-images/Login%20Wireframes.png)

</details>

<details><summary>Register</summary>
      
![Register](https://github.com/Hanna-Boorom/planterest/blob/main/README-images/Register%20Wireframes.png)

</details>

<details><summary>Boards</summary>
      
![Boards](https://github.com/Hanna-Boorom/planterest/blob/main/README-images/Boards%20Wireframes.png)

</details>

<details><summary>BoardDetail</summary>
      
![BoardDetail](https://github.com/Hanna-Boorom/planterest/blob/main/README-images/BoardDetail%20Wireframes.png)

</details>

<details><summary>BoardEdit</summary>
      
![BoardEdit](https://github.com/Hanna-Boorom/planterest/blob/main/README-images/BoardEdit%20Wireframes.png)

</details>

<details><summary>BoardCreate</summary>
      
![BoardCreate](https://github.com/Hanna-Boorom/planterest/blob/main/README-images/BoardCreate%20Wireframes.png)

</details>

<details><summary>PostDetail</summary>
      
![PostDetail](https://github.com/Hanna-Boorom/planterest/blob/main/README-images/PostDetail%20Wireframes.png)

</details>

<details><summary>PostEdit</summary>
      
![PostEdit](https://github.com/Hanna-Boorom/planterest/blob/main/README-images/PostEdit%20Wireframes.png)

</details>

<details><summary>PostCreate</summary>
      
![PostCreate](https://github.com/Hanna-Boorom/planterest/blob/main/README-images/PostCreate%20Wireframes.png)

</details>

#### Component Tree

![Component Tree](https://github.com/Hanna-Boorom/planterest/blob/main/README-images/Component%20Tree.png)

#### Component Architecture

```structure

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
      |__ PostDetail.jsx
      |__ PostCreate.jsx
      |__ PostEdit.jsx
|__ services/
      |__auth.js
      |__boards.js
      |__posts.js
      |__api-config.js

```

#### Time Estimates

| Task                      | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend                   |          |                |               |             |
| Create Rails Database     |    H     |     .5 hrs     |     .5hrs     |    .5hrs    |
| Scaffold Tables           |    H     |     .5 hrs     |     .5hrs     |    .5hrs    |
| Create Associations       |    H     |      1 hr      |      1hr      |     1hr     |
| Set Up Auth               |    H     |      1 hr      |      1hr      |     1hr     |
| Create Validations        |    H     |      1 hr      |      1hr      |     1hr     |
| Configure Controllers     |    H     |      1 hr      |      1hr      |     1hr     |
| Set Up Routes             |    H     |      1 hr      |      1hr      |     1hr     |
| Rails Testing             |    H     |     2 hrs      |      4hr      |     4hr     |
| Frontend                  |          |                |               |             |
| Create React App          |    H     |     .5 hrs     |    .5 hrs     |   .5 hrs    |
| Clean Up Boilerplate      |    H     |     .5 hrs     |    .5 hrs     |   .5 hrs    |
| Create Component Skeleton |    H     |     1 hrs      |      1hr      |     1hr     |
| Set Up Screen Routing     |    H     |     2 hrs      |     2hrs      |    2hrs     |
| Set Up Services and Auth  |    H     |     2 hrs      |     3hrs      |    3hrs     |
| Basic Styling             |    H     |     2 hrs      |     4hrs      |    4hrs     |
| Login/Register Working    |    H     |     2 hrs      |      1hr      |     1hr     |
| Boards Screens Setup      |    H     |     3 hrs      |     6hrs      |    6hrs     |
| Posts Screens Setup       |    H     |     3 hrs      |     5hrs      |    5hrs     |
| Clean Up Styling          |    L     |     4 hrs      |     5hrs      |    5hrs     |
| TOTAL                     |          |     28 hrs     |     38hrs     |    38hrs    |

<br>

### Server (Back End)

#### ERD Model

<details><summary>ERD</summary>
      
![Planterest ERD](https://github.com/Hanna-Boorom/planterest/blob/main/README-images/Planterest%20ERD1.png)

</details>

<br>

---

## Post-MVP

- Add animation to landing page (scrolling pictures)
- Users will be able to view other users' boards
- Advanced user interaction CSS (page load animations, hover shadows...etc)

---

## Code Showcase

While it looks simple, I was proud to figure out how to create a post from a given board while passing props all the way from the services folder.

`` const handlePostCreate = async (boardId, postData) => { const newPost = await addPost(boardId, postData); setBoards((prevState) => [...prevState, newPost]); history.push(`/boards/${boardId}/posts/`); }; ``

## Code Issues & Resolutions

I originally designed my code so that when looking at all boards, each board's cover photo would be the image of the first post. When a new board was created with no posts, however, the app would throw errors since the board had no posts. I created a hotfix that shows the same picture as the cover photo for all boards. I plan on fixing this in the future.
