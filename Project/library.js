
var Express = require("express");


var app = Express();

app.get("/", (request, response) => {
    response.status(200).send("Library opened");
});

app.post("/book", (request, response) => {
    response.status(200).send("Book added to library");
});

app.get("/books", (request, response) => {
    response.status(200).send("List of all available books");
});

app.get("/books/:id", (request, response) => {
    response.status(204).send('id: ' + request.query.id);
});

var server = app.listen(3000, () => {
    console.log("Listening on port " + server.address().port + "...");
});



module.exports = server;
