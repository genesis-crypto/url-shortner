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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostLink = void 0;
const link_1 = require("../models/link");
const uuid_1 = require("uuid");
const shortid_1 = __importDefault(require("shortid"));
class PostLink {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            if (!body.url || !body.user_id) {
                return res.status(400).send('missing content');
            }
            const hash = shortid_1.default.generate();
            const payload = {
                id: (0, uuid_1.v4)(),
                url: body.url,
                hash,
                user_id: body.user_id
            };
            const result = yield new link_1.LinkModel().createOneLink(payload);
            if (!result) {
                return res.status(500).send('failed to create user');
            }
            return res.status(201).send();
        });
    }
}
exports.PostLink = PostLink;
