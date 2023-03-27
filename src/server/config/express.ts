import express, { Application } from "express";
import cors from "cors";

export const config = (app: Application) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
}