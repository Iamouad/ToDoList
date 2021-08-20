# Todo list

# The Stack (FullJS)

Backend server with Express.<br>
User interfaces are implemented by ReactJS.<br>
To call these Apis, we make use of Axios.<br>
Docker to containerize our application and to ease testing.<br>

## Principal commands:

**_npm install: to install node modules required for that project ._** <br>
Ps: run this command inside both client and server to install all parts dependencies<br>
**_nodmemon server (start backend with hot-mode reloading)._**<br>
**_cd client and npm start (start frontend with hot-mode reloading)._**<br>

### Docker config

If you have docker installed, you need to spin up the different containers by running the docker-compose-dev file :<br>
**_docker-compose up -d_** <br>
The App then will be served on port 80 of the localhost **_http://localhost _** <br>
Backend is served on port 5000 of the localhost **_http://localhost:5000 _**<br>

### USECASE:

Fill the Input to add a new Todo <br>
Click on a specific todo to delete it <br>
