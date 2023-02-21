"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetManyUser = exports.makeGetOneUser = void 0;
const get_one_user_1 = require("./get-one-user");
const get_many_user_1 = require("./get-many-user");
function makeGetOneUser() {
    return new get_one_user_1.GetOneUser();
}
exports.makeGetOneUser = makeGetOneUser;
function makeGetManyUser() {
    return new get_many_user_1.GetManyUser();
}
exports.makeGetManyUser = makeGetManyUser;
