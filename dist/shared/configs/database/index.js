"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const knex_1 = __importDefault(require("knex"));
class Database {
    constructor() { }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = (0, knex_1.default)({
                client: 'mysql',
                connection: {
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.DB_PORT),
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME
                },
                pool: {
                    afterCreate: (conn) => {
                        console.log(conn);
                    },
                }
            });
        }
        return Database.instance;
    }
}
exports.Database = Database;
