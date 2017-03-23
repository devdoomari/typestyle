"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDebugMode(env) {
    return env['NODE_ENV'] !== 'production' ||
        env['TYPESTYLE_ENV'] === 'debug';
}
exports.isDebugMode = isDebugMode;
