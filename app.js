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
const express_1 = __importDefault(require("express"));
const axios = require("axios");
const cors = require("cors");
const app = (0, express_1.default)();
const port = 4000;
require("dotenv").config();
const { API_KEY } = process.env;
app.use(cors());
const API_URL = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/culturalEventInfo/1/300/`;
const getAPI = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let response;
    try {
        response = yield axios.get(API_URL);
    }
    catch (error) {
        console.log(error);
    }
    return response;
});
app.get("/", (req, res) => {
    getAPI(req).then((response) => {
        res.json(response.data);
    });
});
app.listen(port, () => console.log("running"));
