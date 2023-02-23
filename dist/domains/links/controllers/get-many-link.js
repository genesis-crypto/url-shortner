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
exports.GetManyLinks = void 0;
const link_1 = require("../models/link");
class GetManyLinks {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = req.query;
            if (!query.page) {
                return res.status(400).json({ message: 'missing param' });
            }
            const page = parseInt(query.page);
            const data = yield new link_1.LinkModel().getAllLinks(page);
            return res.status(200).send(data);
        });
    }
}
exports.GetManyLinks = GetManyLinks;
