import express from "express";
import routes from "./routes.js";

import { fileURLToPath } from "url";
import { dirname } from "node:path";
import path from "node:path";

import "./database/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class App {
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      "/product-file",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );

    this.app.use(
      "/category-file",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
