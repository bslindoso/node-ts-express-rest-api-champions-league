import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";
import * as ClubController from "./controllers/clubs-controller"

const router = Router()

// GET
router.get('/players', PlayerController.getPlayer)
router.get('/players/:id', PlayerController.getPlayerById)
router.get('/clubs', ClubController.getClubs)

// POST
router.post('/players', PlayerController.postPlayer)

// DELETE
router.delete('/players/:id', PlayerController.deletePlayer)

// PATCH
router.patch('/players/:id', PlayerController.updatePlayer)

export default router