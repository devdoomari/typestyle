"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var assert = require("assert");
describe("media query", function () {
    it("standard freestyle", function () {
        index_1.reinit();
        index_1.style({
            color: 'red',
            $nest: {
                '@media (min-width: 400px)': { color: 'red' }
            }
        });
        var standardFreeStyle = index_1.getStyles();
        index_1.reinit();
        index_1.style({ color: 'red' }, index_1.media({
            minWidth: 400
        }, { color: 'red' }));
        assert.equal(index_1.getStyles(), standardFreeStyle);
    });
    it("support type", function () {
        index_1.reinit();
        index_1.style({ color: 'red' }, index_1.media({ minWidth: 400, type: 'screen' }, { color: 'red' }));
        assert.equal(index_1.getStyles(), '.f1960l9c{color:red}@media screen and (min-width: 400px){.f1960l9c{color:red}}');
    });
});
