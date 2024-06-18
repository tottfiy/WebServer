# WebServer
Files:
1. server.js - Express server running on port 8888. Forwards user to site.html upon getting successful GET request.
2. register.html - contains style and HTML code for registration form. Design was created using Twitter Bootstrap. Sends registration results to server.js. Has a checker function that allows only latin letters, numbers and '@'.
3. site.html - connected to quotes.api to generate random clever quotes. Uses React to create interactive click counter. Has built-in CSS style.

Project is built on Bootstrap, with React elements, hosted on Express server, has proper validation form with input-checker, site has refresh time of 30 seconds, data from API is fetched in JSON format.
