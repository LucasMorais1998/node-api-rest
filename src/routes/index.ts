import { Router } from "express";

import PersonController from "../app/Controllers/PersonController";

export const router = Router();

router.get("/", PersonController.index);