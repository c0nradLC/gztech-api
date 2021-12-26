import { Router } from "express";
import { niveisRoutes } from "./niveis.routes";

const router = Router();

router.get("/", (request, response) =>
  response.json({ message: "Server running!" })
);

router.use("/niveis", niveisRoutes);

export { router };