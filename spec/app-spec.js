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
    it("GET: status 200, responds ", () =>
      request.get("/api/users").expect(200));
    it("GETS: status:200, responds with an array of users objects", () =>
      request
        .get("/api/users")
        .expect(200)
        .then(res => {
          expect(res.body.users).to.be.an("array");
          expect(res.body.users[0]).contain.keys("name", "gender");
        }));
    it("GET: QUERY=amount status 200, response with and array of some users", () =>
      request
        .get("/api/users?amount=1")
        .expect(200)
        .then(res => {
          expect(res.body.users).to.be.an("array");
          expect(res.body.users.length).to.eql(1);
          expect(res.body.users[0]).to.an("object");
          expect(res.body.users[0].gender).to.eql("female");
        }));
    it("GET: QUERY=amount status 404, response with User not found, when amount is not an integer", () =>
      request
        .get("/api/users?amount=abc")
        .expect(404)
        .then(res => {
          expect(res.body.msg).to.equal("No users found");
        }));
    it("GET: QUERY= search status 200, response with array of searched users", () =>
      request
        .get("/api/users?query=Ed")
        .expect(200)
        .then(res => {
          expect(res.body.users).to.be.an("array");
          expect(res.body.users.length).to.eql(1);
          expect(res.body.users[0]).to.an("object");
          expect(res.body.users[0].gender).to.eql("female");
        }));
    it("GET: QUERY= search status 404, response with User not found when there is no user found", () =>
      request
        .get("/api/users?query=shiva")
        .expect(404)
        .then(res => {
          expect(res.body.msg).to.equal("No users found");
        }));
    it("GET: QUERY= search status 404, response with User not found when there is no user found", () =>
      request
        .get("/api/users?query=123")
        .expect(404)
        .then(res => {
          expect(res.body.msg).to.equal("No users found");
        }));
    it("GET: status 200, response with a  single user object ", () =>
      request
        .get("/api/users/2")
        .expect(200)
        .then(res => {
          expect(res.body.user).to.be.an("object");
          expect(res.body.user.name).to.eql("Emily Frye");
        }));

    it("GET: status 404, response with User not found when there is no user found", () =>
      request.get("/api/users/as").expect(400));

    it("GET: status 200, response with an array of friends ", () =>
      request
        .get("/api/users/2/friends")
        .expect(200)
        .then(res => {
          expect(res.body.friends).to.be.an("array");
          expect(res.body.friends.length).to.eql(5);
        }));
  });
});
