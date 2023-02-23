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
exports.DeleteLink = void 0;
const link_1 = require("../models/link");
class DeleteLink {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = req.params;
            if (!params.uuid) {
                return res.status(400).json({ message: 'missing param' });
            }
            const result = new link_1.LinkModel().deleteOneLink(params.uuid);
            if (!result) {
                return res.status(500).send('failed to delete');
            }
            return res.status(200).send();
        });
    }
}
exports.DeleteLink = DeleteLink;
