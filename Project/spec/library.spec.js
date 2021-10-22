var Request = require("request");

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../library")
    });
    afterAll(() => {
        server.close();
    });

    describe("Open library/", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Library status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Library body", () => {
            expect(data.body).toBe("Library opened");
        });
    });

    describe("POST new book library/", () => {
        var data = {};
        beforeAll((done) => {
            Request.post("http://localhost:3000/book", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Library add new book POST status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Library add new book POST body", () => {
            expect(data.body).toBe("Book added to library");
        });
    });

    describe("GET all books library/", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/books", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Library get all books GET status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Library get all books GET list", () => {
            expect(data.body).toBe("List of all available books");
        });
    });

    describe("GET book by ID library/", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/books/?1029", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Library get book by ID status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Library get proper book GET book", () => {
            expect(data.body).toBe("List of all available books");
        });
    });

});