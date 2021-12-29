import { Router } from "express";

import { NiveisController } from "../modules/Niveis/useCases/niveis/NiveisController";
import { ListNiveisController } from "../modules/Niveis/useCases/listNiveis/ListNiveisController";
import { UpdateNivelController } from "../modules/Niveis/useCases/updateNivel/UpdateNivelController";
import { DeleteNivelController } from "../modules/Niveis/useCases/deleteNivel/DeleteNivelController";
import { ListNivelByIdController } from "../modules/Niveis/useCases/listNivelById/ListNivelByIdController";

const niveisRoutes = Router();

const niveisController = new NiveisController();
const listNiveisController = new ListNiveisController();
const listNivelByIdController = new ListNivelByIdController();
const updateNivelController = new UpdateNivelController();
const deleteNivelController = new DeleteNivelController();

niveisRoutes.post('/', niveisController.handle);

niveisRoutes.get('/', listNiveisController.handle);

niveisRoutes.get('/:nivelId', listNivelByIdController.handle);

niveisRoutes.put('/', updateNivelController.handle);

niveisRoutes.delete('/:nivelId', deleteNivelController.handle);

export { niveisRoutes };