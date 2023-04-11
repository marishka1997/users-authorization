# Users Authorization

## Description 

The project should consist of 3 main parts:
- Authorization form
- Retrieve users through JSON placeholder and display them in a table
- Show users details


### Sign In 
- The authorization page should consist of two mandatory fields (*Username* and *Password*).
- *Sign in* button should be disabled until the form is valid.
- In case of input focus (moving to another field), if it is not filled, an error should be displayed.
- If you click on the *Sign in* button, it should be checked whether "admin" is entered in both fields, if it is not, it should display an alert: *username or password is incorrect*, if it is entered, it should be redirected to the Home page.

### Home Page
- A table of users should be drawn on the home page. The list of users should be retrieved via the JSON placeholder method: *https://jsonplaceholder.typicode.com/users*.
- When clicking the left mouse button on the row of the table, a "context menu" should appear next to the cursor, from which it will be possible to delete the user or go to the details page;
- Users should be deleted only in front (row should be removed from DOM) Writing "context menu" without auxiliary plugin.

### Details page
- On the details page, the user should be retrieved according to the id specified in the url: *https://jsonplaceholder.typicode.com/users/id*.
- According to the picture below, a user card should be drawn, where his information will be displayed (id, name, first letter of the name, e-mail).
- If the user tries to log in with a link without authorization, he should be redirected to the authorization page, either to home or to details.

Project was implemented for company ***Softx***.

## Used Technologies 
- HTML
- SCSS
- Bootstrap
- TypeScript
- Angular
- RxJS
- Angular Material


## Development server

Run `npm install` for installation and then `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

This project was generated with Angular CLI version 15.2.1.
