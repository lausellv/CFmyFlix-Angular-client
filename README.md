# CFmyFlix

# Purpose

Welcome to **myFlix**! My objective was to build the client side using Angular to display the data stored in my MongoDB database. The client side and server side communicates via a RESTful [API](https://github.com/lausellv/CFmyFlix-client.git). The project utilizes a single-page application with state routing to navigate between views and share URLs.

# What will it do?
The web application will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.

# Features
- Allows users to see a list of all movies in the database
- Allows users to get detailed information about a single movie by movie title
- Allows users to get detailed information about a genre by genre name
- Allows users to get detailed information about a director by name
- Allows new users to create an user account
- Allows existing users to update their user info or to delete their account
- Allows existing users to add or remove movies to/from their list of favorites

# Stack, Dependencies, Environment, Hosting

### Stack
1. Angular
2. **Note** - The complete frontend and backend project utilizes the MEAN stack

### Dependencies
    "@angular/animations": "~12.2.0",
    "@angular/cdk": "^12.2.9",
    "@angular/common": "~12.2.0",
    "@angular/compiler": "~12.2.0",
    "@angular/core": "~12.2.0",
    "@angular/forms": "~12.2.0",
    "@angular/material": "^12.2.9",
    "@angular/platform-browser": "~12.2.0",
    "@angular/platform-browser-dynamic": "~12.2.0",
    "@angular/router": "~12.2.0",
    "rxjs": "~6.6.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4"
### devDependencies
    "@angular-devkit/build-angular": "~12.2.7",
    "@angular/cli": "~12.2.7",
    "@angular/compiler-cli": "~12.2.0",
    "@types/jasmine": "~3.8.0",
    "@types/node": "^12.11.1",
    "jasmine-core": "~3.8.0",
    "karma": "~6.3.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.0.3",
    "karma-jasmine": "~4.0.0",
    "karma-jasmine-html-reporter": "~1.7.0",
    "typescript": "~4.3.5"

### Environment
1. **Visual Studio Code**  v1.61.1
2. npm v7.24.1

### Development server

Run the below command for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```
ng serve
```
# Project Status

Complete
