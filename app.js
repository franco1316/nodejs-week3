const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const { globalErrorHandler } = require("./controllers/errors");

const { users } = require("./routes/users");

const app = express();

app.use(cors());

app.use(express.json());

const limiter = rateLimit({
  max: 10000,
  windowMs: 1 * 60 * 60 * 1000,
  message: "Too many request from this Ip",
});

app.use(limiter);

app.use("/api/v1/users", users);

app.use("*", globalErrorHandler);

module.exports = { app };
