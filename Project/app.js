const { response } = require("express");
var Express = require("express");


var app = Express();

app.get("/", (request, respond) => {
    response.status(200).send("The polyglot tester");
});

app.get("/test", (request, response) => {
    response.status(500).send({"message": "This is error response"});
});

var server = app.listen(3000, () => {
    console.log("Listening on port " + server.address().port + "...");
});



module.exports = server;

// function add(x, y) {
//     return x + y;
// }

// module.exports = add;

