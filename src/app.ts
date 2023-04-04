import express, { Request, Response } from "express";

const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 4000;

require("dotenv").config();
const { API_KEY } = process.env;

app.use(cors());

const list: { title: string }[] = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

app.get("/list", (req, res) => {
  res.json(list);
});

app.post("/list", (req, res) => {
  list.push({
    title: req.body.title,
  });
  return res.send("추가 완료");
});

app.delete("/list", (req, res) => {
  for (let i = 0; list.length; i++) {
    if (list[i].title === req.body.title) {
      list.splice(i, 1);
      break;
    }
  }
  return res.send("삭제 완료");
});

app.listen(port, () => console.log("running"));
