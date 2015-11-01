/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../src/app.ts" />

import * as assert from "assert";
import * as app from "../src/app";

describe("HelloWorldWriter.Write", () : void => {
  it("should throw not implemented error", () : void => {
    assert.throws(() : void => {
      // dummy code
      var helloWorldWriter = new app.HelloWorldWriter();
      helloWorldWriter.Write();
    });
  });
});
