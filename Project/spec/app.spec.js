// var add = require("../app");
// // import {add} from "../app"

// describe("Add functionality", () => {
//     it("calculates x + y = z", () => {
//         expect(add(10, 5)).toEqual(15);
//     });
//     it("calculates x + y != z", () => {
//         expect(add(10, 5)).not.toEqual(16);
//     });
// });

// const { response } = require("express");
var Request = require("request");

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../app")
    });
    afterAll(() => {
        server.close();
    });

    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(500);
        });
        it("Body", () => {
            expect(data.body).toBe("The polyglot tester");
        });
    });
});