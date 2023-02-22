"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteUser = exports.makePatchUser = exports.makePostUser = exports.makeGetManyUser = exports.makeGetOneUser = void 0;
const get_one_user_1 = require("./get-one-user");
const get_many_user_1 = require("./get-many-user");
const post_user_1 = require("./post-user");
const delete_user_1 = require("./delete-user");
const patch_user_1 = require("./patch-user");
function makeGetOneUser() {
    return new get_one_user_1.GetOneUser();
}
exports.makeGetOneUser = makeGetOneUser;
function makeGetManyUser() {
    return new get_many_user_1.GetManyUser();
}
exports.makeGetManyUser = makeGetManyUser;
function makePostUser() {
    return new post_user_1.PostUser();
}
exports.makePostUser = makePostUser;
function makePatchUser() {
    return new patch_user_1.PatchUser();
}
exports.makePatchUser = makePatchUser;
function makeDeleteUser() {
    return new delete_user_1.DeleteUser();
}
exports.makeDeleteUser = makeDeleteUser;
