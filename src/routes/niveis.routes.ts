import { Router } from "express";

import { NiveisController } from "../modules/Niveis/useCases/niveis/NiveisController";
import { ListNiveisController } from "../modules/Niveis/useCases/listNiveis/ListNiveisController";
import { UpdateNivelController } from "../modules/Niveis/useCases/updateNivel/UpdateNivelController";
import { DeleteNivelController } from "../modules/Niveis/useCases/deleteNivel/DeleteNivelController";

const niveisRoutes = Router();

const niveisController = new NiveisController();
const listNiveisController = new ListNiveisController();
const updateNivelController = new UpdateNivelController();
const deleteNivelController = new DeleteNivelController();

niveisRoutes.post('/', niveisController.handle);

niveisRoutes.get('/', listNiveisController.handle);

niveisRoutes.put('/', updateNivelController.handle);

niveisRoutes.delete('/', deleteNivelController.handle);

export { niveisRoutes };