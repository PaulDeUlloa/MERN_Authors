# Authors App - Full Stack
> Created an application where users submit their favorite authors. Listing all the authors on the /authors page. From there, the user may click on a button to edit or delete each author. 
  The edit form is pre-populated with the existing data for the author.
  Used backend validations to ensure that all author names are at least three characters long. If the user does not pass validations, an error message is displayed. Validations are also applied when editing an author.
<!--  Live demo [_here_](https://www.pendingLiveSiteExample.com). -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Contact](#contact)
<!--
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
-->
<!-- * [License](#license) -->


## General Information
- Once a user registers an account, they may login and create, edit, or delete their favorite author that they would like others to see on the collective all authors page.
- What problem does this (intend to) solve? This is an app where users can utilize CRUD and have fun expressing their favorite authors and inspire others to look them up.
- What is the purpose of your project? As a growing and passionate developer, learning to create more full-stack applications is what drove me to start and complete this application.


## Technologies Used
- React
- Javascript
- Node.js
- Express
- Mongoose
- HTML5
- CSS
- MongoDB
- Axios
- Bcrypt
- Jsonwebtoken
- Bootstrap


## Features
List the ready features here:
- Users can login and register
- Used (JWTs) to keep track of who is logged in, to ensure data has not been tampered with along the request/response cycle.
- Users can create and post their favorite author
- Users can edit their author
- Users can delete their author


## Screenshots
![All Authors](./img/screenshot.png)
![Create Author](./img/screenshot.png)


## Setup
### Project requirements/dependencies:
#### Client:
Axios, bcrypt, bootstrap, react, react-dom, react-router-dom, and react-scripts.
#### Server:
Bcrypt, cookie-parser, cors, dotenv, express, jsonwebtoken, mongoose, mongoose-unique-validator, and morgan.

Install the above dependencies for either the client or server folder which means you will need two seperate terminals. 

#### Suggestion:
PowerShell for client and Git Bash for Server. 

## Usage

#### Client Activation:
- `cd client`
- `npm run start`

#### Server Activation:
- `cd server`
- `nodemon server.js`


## Project Status
Project is: _in progress_ 

<!-- 
## Room for Improvement
Include areas you believe need improvement / could be improved. Also add TODOs for future development. 

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2

To do:
- Feature to be added 1
- Feature to be added 2


## Acknowledgements
Give credit here.
- This project was inspired by...
- This project was based on [this tutorial](https://www.example.com).
- Many thanks to...
-->

## Contact
Created by [@PaulDeUlloa](https://www.pauldeulloa.com/) - feel free to contact me!


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
