High-level Specifications:

The component should display Sample Data in a table
User should be able to select how many rows are displayed in the table
Table should be paginated if not all rows are displayed on the screen based on the user’s selection
Pagination options should be displayed in the table footer
Column names should be displayed in the table header
Entire table, table header and table footer should always be displayed on the screen while scrolling
If number of rows exceeds the size of the table body, a vertical scrollbar should be displayed within the table body – only table body shall scroll vertically, table header and footer shall remain as is
If number of columns exceed the size of the table body, a horizontal scrollbar should be displayed within the table body – only table body and table header shall scroll to reveal the additional columns, table footer shall remain as is
Each row should contain a button which shall submit the row ID and row status to /api/submit as a POST request – You are not expected to create the POST endpoint, but you can mock one if you like


Steps to run the application
Clone and checkout the code
Install Node and npm in your system
npm install in Terminal or CLI
ng serve to build and run the application
http://localhost:4200/ to load the application in the browser
