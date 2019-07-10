# IMPORTANT: Git changed the following files to CRLF line endings!!! You will have to change them back to LF in order for it to work!!!
warning: LF will be replaced by CRLF in mongodb/mongo-create-admin.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in mongodb/mongo-create-express.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in mongodb/run.sh.

# Express Demo
Welcome to the git repository for the Express Demo project.

## Overview
This repository contains the back-end (Express.js) and Database (MongoDB).  

## Prerequisites
- git
- docker
- docker-compose

On Windows use docker toolbox it comes with docker and docker-compose

### Optional
- docker-machine (when using a Windows host)
- visual studio code (the prefered IDE for this project)

## Getting started
1) Pull this repo
2) Install Docker for Windows - If windows 7 use docker toolbox follow the steps below on Windows 10 just use normal Docker for windows and skip to step 3
    
    On windows create a docker-machine - this is needed to run the docker containers inside of.
    `$ docker-machine create -d "virtualbox" express-machine`
    
    Start the docker machine
    `$ docker-machine start express-machine`
    
    Run the command
    `$ docker-machine env`
    
    Copy the last line from the output of that last command and paste it into your shell, this will configure it properly

3) Go into the express folder and run the following command to install all the required node packages
    `$ npm ci` 
4) Navigate to project directory
5) Run the following command to start the docker instances (Express, mongodb) - The -d flag is optional, this will detach the console from the docker instance so you can keep using it:
    `$ docker-compose up -d`
    //if using the -d flag you can see the logging by doing
    `$ docker-compose logs -f`
6) Visit the service in your favorite browser.
   - http://localhost:8080/api/todo
For local development purposes the ports are published to the docker-daemon host machine as specified in docker-compose.override.yml.
