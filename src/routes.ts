import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";

const router = Router()

// GET
router.get('/players', PlayerController.getPlayer)
router.get('/players/:id', PlayerController.getPlayerById)

// POST
router.post('/players', PlayerController.postPlayer)

// DELETE
router.delete('/players/:id', PlayerController.deletePlayer)

// PATCH
router.patch('/players/:id', PlayerController.updatePlayer)

export default router