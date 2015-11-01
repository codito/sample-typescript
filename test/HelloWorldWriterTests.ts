/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../src/app.ts" />

var assert = require("assert");
var app = require("./app");

describe("HelloWorldWriter.Write", () : void => {
  it("should throw not implemented error", () : void => {
    assert.throws(() : void => {
      // dummy code
      var helloWorldWriter = new app.HelloWorldWriter();
      helloWorldWriter.Write();
    });
  });
});
