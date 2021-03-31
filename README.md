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


<details><summary>Landing</summary>
      
![Landing](https://github.com/Hanna-Boorom/planterest/blob/main/Landing%20Wireframes.png)

</details>


<details><summary>Login</summary>
      
![Login](https://github.com/Hanna-Boorom/planterest/blob/main/Login%20Wireframes.png)

</details>


<details><summary>Register</summary>
      
![Register](https://github.com/Hanna-Boorom/planterest/blob/main/Register%20Wireframes.png)

</details>


<details><summary>Boards</summary>
      
![Boards](https://github.com/Hanna-Boorom/planterest/blob/main/Boards%20Wireframes.png)

</details>


<details><summary>BoardDetail</summary>
      
![BoardDetail](https://github.com/Hanna-Boorom/planterest/blob/main/BoardDetail%20Wireframes.png)

</details>

<details><summary>BoardEdit</summary>
      
![BoardEdit](https://github.com/Hanna-Boorom/planterest/blob/main/BoardEdit%20Wireframes.png)

</details>


<details><summary>BoardCreate</summary>
      
![Dummy Link](url)

</details>



<details><summary>Posts</summary>
      
![Dummy Link](url)

</details>


<details><summary>PostDetail</summary>
      
![Dummy Link](url)

</details>


<details><summary>PostEdit</summary>
      
![Dummy Link](url)

</details>


<details><summary>PostCreate</summary>
      
![Dummy Link](url)

</details>







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
|__ services/
      |__auth.js
      |__boards.js
      |__posts.js
      |__api-config.js

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

<details><summary>ERD</summary>
      
![Planterest ERD](https://github.com/Hanna-Boorom/planterest/blob/main/Planterest%20ERD.png)

</details>

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase



## Code Issues & Resolutions

