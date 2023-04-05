import express, { Application } from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import swaggerSetup from "../../docs/swagger";

import yaml from "yaml";
import fs from "fs";

export const config = (app: Application) => {
    const file = fs.readFileSync(`${__dirname}/swagger.yaml`, "utf8");
    const swaggerDocument = yaml.parse(file);

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(Object.assign(swaggerSetup, swaggerDocument)));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
}