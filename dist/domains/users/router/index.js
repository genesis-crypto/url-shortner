"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users_path = exports.route = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const users_path = '/users';
exports.users_path = users_path;
const route = (0, express_1.Router)();
exports.route = route;
const getOneUser = (0, controllers_1.makeGetOneUser)();
const getManyUser = (0, controllers_1.makeGetManyUser)();
const postUser = (0, controllers_1.makePostUser)();
const patchUser = (0, controllers_1.makePatchUser)();
const deleteUser = (0, controllers_1.makeDeleteUser)();
route.route('/')
    .get(getManyUser.handle)
    .post(postUser.handle);
route.route('/:uuid')
    .get(getOneUser.handle)
    .patch(patchUser.handle)
    .delete(deleteUser.handle);
