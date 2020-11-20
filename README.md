# Video-library

A Full stack MERN website for storing Video Information where user can search for Video by Title.
<img width="1438" alt="ss" src="https://user-images.githubusercontent.com/40449202/99756596-5d1a3800-2aa2-11eb-8194-460709b1b50e.png">

<h2>Installation </h2>

Use the package manager [npm](https://www.npmjs.com/) to install Video-Library.
Setup the project and install the packages by running:

```bash
npm run install
```

Run server on server directory with command

```bash
npm run start:dev
```

Run client on client directory with command

```bash
npm run start
```

<h2> Built with  </h2>
<ul>
  <li>FrontEnd: <b> React.JS, HTML/CSS </b></li>
  <li>Backend:  <b> Node.JS, Express.JS </b> </li>
  <li>Database: <b> MongoDB, Mongoose </b> </li>
</ul>

<h2> Features </h2>
<ul>
  <li> Login/ Sign Up / Log Out the user. </li>
  <li> ADD a new video to the list.</li>
    <li> DELETE video from list</li>
       <li> Search video by title </li>
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
</ul>
