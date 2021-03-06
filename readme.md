# doctor-search

Doctor search app, 2/16/2018

**By Natalia Telpukhova**

## Description

An application that uses Better Doctor API to retrieve information about doctors and lets a user find a match by typing an issue that they're having, or the name of a doctor.

## Setup

* clone repository
```
$ git clone https://github.com/telpuhova/doctor-search.git
```
* go into the cloned repo and run the following commands from your terminal:
```
$ npm install
$ bower install
```
* create a file in the root directory titled .env
* acquire an api Key for the Better Doctor API and save it in the .env file as exports.apiKey1 = "{YOUR API KEY HERE}"
* run the following from the terminal:
```
$ gulp build --production
$ gulp serve
```

## Technologies Used

HTML, CSS, JavaScript, Node, npm, Gulp, Jasmine, Karma, Bootstrap, jQuery

### License

Copyright (c) 2018 Natalia Telpukhova
