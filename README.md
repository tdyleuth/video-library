# Video-library

A Full stack MERN web application for storing Video information content in a library format where user can browse and search for Video by title or register/login to insert a video.
<img width="1438" alt="ss" src="https://user-images.githubusercontent.com/40449202/99756596-5d1a3800-2aa2-11eb-8194-460709b1b50e.png">

<h2>Project Status:</h2>
<small>This project is still in progess. Features currently still working on include: Updating Video functionality, Dynamic rendering of deleted videos, updating email and password of users, and filter component for videos. </small>

<h3>Estimated Time To Complete:<h3>
 <small>1-2 Weeks<small>

<h2>Installation:</h2>

Create .env file in server directory to include and insert JWT_SECRET=SECRET 

Use the package manager [npm](https://www.npmjs.com/) to install Video-Library.
Setup the project and install the packages by running:

```bash
npm run install
```

Run Back-End on server directory with command

```bash
npm run start:dev
```

Run Front-End on client directory with command

```bash
npm run start
```

<h2> Built with  </h2>
<ul>
  <li>Front-End: <b> React.JS, HTML/CSS </b></li>
  <li>Back-End:  <b> Node.JS, Express.JS </b> </li>
  <li>Database: <b> MongoDB, Mongoose </b> </li>
</ul>

<h2> Features </h2>
<ul>
  <li> Login / Sign Up / Log Out the user. </li>
  <li> Add a new video to the list.</li>
    <li> Delete video from list</li>
  <li> Update video from list</li>
       <li> Search video by title </li>
  <li> Filter Video by type, releaseDate, rating </li>
</ul>

<h2> API </h2>
<h4> Users </h4>
<ul>
  <li> <b>POST</b> /api/user/signup/ </li>
  <li> <b>POST</b>  /api/users/login  </li>
   <li> <b>PUT</b>  /api/users/:id </li>
  <li> <b>DELETE</b>  /api/user/:id </li>
  
</ul>

<h4> Videos </h4>
<ul>
  <li> <b>GET</b> /api/videos </li>
  <li> <b>POST</b> /api/video/ </li>
  <li> <b>DELETE</b> /api/video/:id  </li>
  <li> <b>UPDATE</b> /api/video/:id  </li>
</ul>
