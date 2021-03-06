# Devour It!

Devour It! gets data from a mySQL database, populates it to the page, and allows a user to interact by selecting a button to "Devour" a pie, or "Make" a pie which has already been devoured. Users are able to supply new pies using the submission form at page bottom. This is all part of a homework assignment for UCLA's Fullstack Web Development Coding Bootcamp (September 2019 to March 2020).

## Devour It! Functionality
On initial access to the root, the page is rendered via express-handlebars to show a header of "Pies!" with an image of a pie, and two divs sharing a row: to the left is a list of pies which can be devoured, and to the right is a list of pies which have already been devoured and can be made again.

Underneath this is a form where a user can "Add a Pie" of their own. After filling in the form, they select the "Add Pie" button. The new pie will be built into a variable and passed as a post request to the api, and the page will reload with the new pie included in the list of pies to be "Devoured."

When a user selects any "Devour!" button from the left div, the pie associated with that button will be moved to the right side div for "devoured" pies. When a user selects and "Make!" button from the right side div, the pie associated with that button will be moved to the left side dive for pies "to be devoured." 

## Devour It! Dependencies
* dotenv
* express
* express-handlebars
* mysql

## Devour It! Languages
* CSS
* HTML
* JavaScript

## Devour It! Libraries
* FontAwesome
* jQuery
* Materialize

## Devour It! Stretch Goals
* Proper server side validation. 
* Client side validation to provide guidance when improperly filled out.
* Add a delete function to delete a pie when it's no longer wanted.