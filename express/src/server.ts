import express = require("express");
import * as http from "http";
import app from "./app";

const PORT = 8080;

// For local development run a normal http server (no HTTPS certs)
if (process.env.NODE_ENV === "development") {
  http.createServer(app).listen(PORT, "0.0.0.0", () => {
    console.log("Express-feedback HTTP server listening on port " + PORT);
  });
}
