import express, { Request, Response } from "express";

const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 4000;

require("dotenv").config();
const { API_KEY } = process.env;

app.use(cors());

const API_URL = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/culturalEventInfo/1/300/`;

const getAPI = async (req: Request) => {
  let response;
  try {
    response = await axios.get(API_URL);
  } catch (error) {
    console.log(error);
  }
  return response;
};

app.get("/", (req: Request, res: Response) => {
  getAPI(req).then((response) => {
    res.json(response.data);
  });
});

app.listen(port, () => console.log("running"));
