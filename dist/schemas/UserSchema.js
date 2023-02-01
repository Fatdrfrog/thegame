"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerSchema = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
exports.playerSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String,
});
