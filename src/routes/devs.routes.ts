import { Router } from "express";

import { DevsController } from "../modules/Devs/useCases/devs/DevsController";
import { ListDevsController } from "../modules/Devs/useCases/listDevs/ListDevsController";
import { UpdateDevController } from "../modules/Devs/useCases/updateDev/UpdateDevController";
import { DeleteDevController } from "../modules/Devs/useCases/deleteDev/DeleteDevController";

const devsRoutes = Router();

const devsController = new DevsController();
const listDevsController = new ListDevsController();
const updateDevController = new UpdateDevController();
const deleteDevController = new DeleteDevController();

devsRoutes.post('/', devsController.handle);

devsRoutes.get('/', listDevsController.handle);

devsRoutes.put('/', updateDevController.handle);

devsRoutes.delete('/', deleteDevController.handle);

export { devsRoutes };