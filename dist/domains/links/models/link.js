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
exports.LinkModel = void 0;
const database_1 = require("../../../shared/configs/database");
class LinkModel {
    constructor() {
        this.link_table = () => database_1.Database.getInstance()('links');
    }
    getAllLinks(page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.link_table().paginate({ perPage: 10, currentPage: page });
        });
    }
    getOneLink(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.link_table().select('*').where('id', '=', uuid);
        });
    }
    updateOneLink(uuid, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.link_table().update(payload).where('id', '=', uuid).then(() => true).catch(() => false);
        });
    }
    deleteOneLink(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.link_table().delete().where('id', '=', uuid).then(() => true).catch(() => false);
        });
    }
    createOneLink(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.link_table().insert(payload).then(() => true).catch(() => false);
        });
    }
    getLinkByHash(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.link_table().select('*').where('hash', '=', hash);
        });
    }
}
exports.LinkModel = LinkModel;
