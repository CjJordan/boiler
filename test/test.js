//Require the dev-dependencies
var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
chai.should();

chai.use(chaiHttp);

// describe("GET /api/examples", function() {
//   after(function() {
//     process.exit(0);
//   });

//   it("it should GET all the examples", function(done) {
//     chai
//       .request(server)
//       .get("/api/examples")
//       .end(function(err, res) {
//         res.should.have.status(200);
//         res.body.should.be.a("array");
//         res.body.length.should.be.eql(0);
//         done();
//       });
//   });
// });

describe("POST /api/examples", function() {
  after(function() {
    process.exit(0);
  });

  it("it should POST an example", function(done) {
    var ex = {
      text: "test",
      description: "test entry"
    };
    chai
      .request(server)
      .post("/api/examples")
      .send(ex)
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("id");
        res.body.should.have.property("text").eql("test");
        done();
      });
  });
});
