# Semantic-AI Front End Coding Challenge

## Overview

This challenge is designed to test basic Angular knowledge, along with coding style and practices.

The finished product does not have to 'look good', so don't spend time making it pixel perfect.
The functionality is most important.

Feel free to use any open source tools such as [Angular Material](https://material.angular.io/) or [Bootstrap](https://getbootstrap.com/).

The '/api' endpoints mentioned below will work like a typical web API, and will return responses at: http://localhost:4200/api

Please do not publish your solution publicly to git, email a .patch file of all of your changes to:

`SAI Front End Development <b6ae80e6.semanticresearch.com@amer.teams.ms>`

## Challenge

Write an application that:
* Has a login page
  * Form with two fields: username & password
  * Hitting 'Submit' button validates username & password at '/api/auth'.
    * That endpoint expects a post with an empty body but the following query params:
      * username
      * password
    * Valid login is: admin / password
  * If auth validation passes, send them to home page
  * If auth validation fails, show an error message
* Home page with the following:
  * Route is '/articles'
     * Cannot access this route if not logged in
  * Shows the logged in user at the top of the page (Last Name, First Name)
     * Should use a pipe that takes in the user object.
     * Get current logged in user from '/api/auth' (GET)
  * Shows table of articles
     * Fetched from '/api/articles' (GET)
     * Two columns: Title, Author
     * Title value is a link which when clicked:
       *  Shows the title, and full content of the article below the table

## Bonus (Optional)
When selecting an article from the table the route is updated so when sharing the link that article's content
is already displaying without having to click.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
