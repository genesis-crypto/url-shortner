"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUser = void 0;
const user_1 = require("../models/user");
const uuid_1 = require("uuid");
class PostUser {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            if (!body.name) {
                return res.status(400).send('missing content');
            }
            const payload = {
                id: (0, uuid_1.v4)(),
                name: body.name
            };
            const result = yield new user_1.UserModel().createOneUser(payload);
            if (!result) {
                return res.status(500).send('failed to create user');
            }
            return res.status(201).send();
        });
    }
}
exports.PostUser = PostUser;
