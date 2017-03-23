"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var debugMode_1 = require("../internal/debugMode");
describe("debug mode", function () {
    it("should be false if NODE_ENV==production and TYPESTYLE_ENV is undefined", function () {
        assert(!debugMode_1.isDebugMode({
            NODE_ENV: 'production',
        }), 'NODE_ENV === production && TYPESTYLE_ENV == undefined, but debug mode.');
    });
    it("should be true if NODE_ENV==production and TYPESTYLE_ENV==debug", function () {
        assert(debugMode_1.isDebugMode({
            NODE_ENV: 'production',
            TYPESTYLE_ENV: 'debug',
        }), 'NODE_ENV === production && TYPESTYLE_ENV == debug, butnot debug mode.');
    });
});
