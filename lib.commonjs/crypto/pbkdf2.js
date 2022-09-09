"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pbkdf2 = void 0;
const crypto_js_1 = require("./crypto.js");
const index_js_1 = require("../utils/index.js");
let locked = false;
const _pbkdf2 = function (password, salt, iterations, keylen, algo) {
    return (0, crypto_js_1.pbkdf2Sync)(password, salt, iterations, keylen, algo);
};
let __pbkdf2 = _pbkdf2;
function pbkdf2(_password, _salt, iterations, keylen, algo) {
    const password = index_js_1.logger.getBytes(_password, "password");
    const salt = index_js_1.logger.getBytes(_salt, "salt");
    return (0, index_js_1.hexlify)(__pbkdf2(password, salt, iterations, keylen, algo));
}
exports.pbkdf2 = pbkdf2;
pbkdf2._ = _pbkdf2;
pbkdf2.lock = function () { locked = true; };
pbkdf2.register = function (func) {
    if (locked) {
        throw new Error("pbkdf2 is locked");
    }
    __pbkdf2 = func;
};
Object.freeze(pbkdf2);
//# sourceMappingURL=pbkdf2.js.map