"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRedirectLink = exports.makeDeleteLink = exports.makePatchLink = exports.makePostLink = exports.makeGetOneLink = exports.makeGetManyLinks = void 0;
const get_many_link_1 = require("./get-many-link");
const get_one_link_1 = require("./get-one-link");
const post_link_1 = require("./post-link");
const patch_link_1 = require("./patch-link");
const delete_link_1 = require("./delete-link");
const redirect_link_1 = require("./redirect-link");
function makeGetManyLinks() {
    return new get_many_link_1.GetManyLinks();
}
exports.makeGetManyLinks = makeGetManyLinks;
function makeGetOneLink() {
    return new get_one_link_1.GetOneLink();
}
exports.makeGetOneLink = makeGetOneLink;
function makePostLink() {
    return new post_link_1.PostLink();
}
exports.makePostLink = makePostLink;
function makePatchLink() {
    return new patch_link_1.PatchLink();
}
exports.makePatchLink = makePatchLink;
function makeDeleteLink() {
    return new delete_link_1.DeleteLink();
}
exports.makeDeleteLink = makeDeleteLink;
function makeRedirectLink() {
    return new redirect_link_1.RedirectLink();
}
exports.makeRedirectLink = makeRedirectLink;
