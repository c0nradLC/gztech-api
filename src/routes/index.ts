import { Router } from "express";
import { niveisRoutes } from "./niveis.routes";
import { devsRoutes } from "./devs.routes";

const router = Router();

router.get("/", (request, response) =>
  response.json({ message: "Server running!" })
);

router.use("/niveis", niveisRoutes);
router.use("/devs", devsRoutes);

export { router };