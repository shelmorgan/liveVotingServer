# Live Voting Server

Created by following a full-stack redux tutorial for creating a live voting application.

[Tutorial by Tero Parviainen (@teropa)](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html#the-app)

## The Application:
The system will technically consist of two applications: There's a browser app made with React that provides both the user interfaces, and a server app made with Node that handles the voting logic. Communication between the two will be done using WebSockets.

This is going to use Redux to organize the application code both on the client and on the server. For holding the state this will use Immutable data structures.
