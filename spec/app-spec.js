const { expect } = require("chai");
const app = require("../app");
const request = require("supertest")(app);

describe("/api", () => {
  it('GET 404 responds with 404 and "Page not found" error message', () =>
    request
      .get("/ap/")
      .expect(404)
      .then(res => {
        expect(res.body.msg).to.equal("Page not found");
      }));

  describe("/users", () => {
    it("GET: responds with a 200 status", () =>
      request.get("/api/users").expect(200));
    it("GETS: status:200 and responds with an array of users objects", () =>
      request
        .get("/api/users")
        .expect(200)
        .then(res => {
          //console.log(res.body.users);
          expect(res.body.users).to.be.an("array");
          expect(res.body.users[0]).contain.keys("name", "gender");
        }));
  });
});
