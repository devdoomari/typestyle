import * as assert from 'assert';
import { isDebugMode } from '../internal/debugMode';
describe("debug mode", function () {
    it("should be false if NODE_ENV==production and TYPESTYLE_ENV is undefined", function () {
        assert(!isDebugMode({
            NODE_ENV: 'production',
        }), 'NODE_ENV === production && TYPESTYLE_ENV == undefined, but debug mode.');
    });
    it("should be true if NODE_ENV==production and TYPESTYLE_ENV==debug", function () {
        assert(isDebugMode({
            NODE_ENV: 'production',
            TYPESTYLE_ENV: 'debug',
        }), 'NODE_ENV === production && TYPESTYLE_ENV == debug, butnot debug mode.');
    });
});
