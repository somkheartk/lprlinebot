"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureJSON = exports.toArray = void 0;
const exceptions_1 = require("./exceptions");
function toArray(maybeArr) {
    return Array.isArray(maybeArr) ? maybeArr : [maybeArr];
}
exports.toArray = toArray;
function ensureJSON(raw) {
    if (typeof raw === "object") {
        return raw;
    }
    else {
        throw new exceptions_1.JSONParseError("Failed to parse response body as JSON", raw);
    }
}
exports.ensureJSON = ensureJSON;
