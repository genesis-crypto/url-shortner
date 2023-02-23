"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.links_path = exports.route = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const links_path = '/links';
exports.links_path = links_path;
const route = (0, express_1.Router)();
exports.route = route;
const getManyLinks = (0, controllers_1.makeGetManyLinks)();
const getOneLink = (0, controllers_1.makeGetOneLink)();
const postLink = (0, controllers_1.makePostLink)();
const patchLink = (0, controllers_1.makePatchLink)();
const deleteLink = (0, controllers_1.makeDeleteLink)();
const redirectLink = (0, controllers_1.makeRedirectLink)();
route.route('/')
    .get(getManyLinks.handle)
    .post(postLink.handle);
route.route('/:uuid')
    .get(getOneLink.handle)
    .patch(patchLink.handle)
    .delete(deleteLink.handle);
route.route('/redirect/:hash')
    .get(redirectLink.handle);
