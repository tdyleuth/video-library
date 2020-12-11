# Video-library

A Full stack MERN web application for storing Video information content in a library format where user can browse and search for Video by title or register/login to insert a video. Most of the front-end was built using custom CSS without the reliability a CSS libraries.

<img width="1438" alt="ss" src="https://user-images.githubusercontent.com/40449202/101721360-a552c780-3a5c-11eb-881b-adb362ce7e5f.png">

<h2>Project Status:</h2>
<small>This project is still in progess. Features currently still working on include: Updating Video functionality, dynamic rendering of deleted videos, updating email and password of users, and filter component for videos. </small>

<h2>Installation:</h2>

Install Mongo DB:

```bash
$ brew tap mongodb/brew
$ brew install mongodb-community
$ brew services start mongodb-community
$ mkdir -p /data/db
$ brew services start mongodb
$ mongo > use videos
```

Create .env file in server directory to include and insert JWT_SECRET=SECRET

```bash
cd server touch .env
```

Use the package manager [npm](https://www.npmjs.com/) to install Video-Library.
Setup the project and install the packages by running:

```bash
npm run install
```

Run Back-End on server directory with command:

```bash
cd server
npm run start:dev
```

Run Front-End on client directory with command:

```bash
cd client
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
