import { Router } from "express";

const router = Router();


router.get('/', (request, response) => response.send("TUDO OK!"))

export default router;