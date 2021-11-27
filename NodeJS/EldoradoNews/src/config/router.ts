import { Router } from "express";
import Multer  from 'multer';

import NewsController from "../app/Controllers/NewsController";
import NewsValidator from "../app/Validator/NewsValidator";
import uploadConfig from './multer';
import AuthController from "../app/Controllers/AuthController";
import Auth from '../app/Middlewares/AuthMiddleware';
import UserController from "../app/Controllers/UserController";

const upload = Multer(uploadConfig);
const router = Router();

router.post('/auth', AuthController.auth);
router.post('/user', UserController.create);

router.use(Auth);
router.get('/news', NewsController.index);
router.get('/news/:id', NewsController.view);
router.post('/news', upload.single('cover'), NewsValidator, NewsController.create);
router.put('/news/:id', upload.single('cover'), NewsController.update);
router.delete('/news/:id', NewsController.delete);

// router.get('/news/:id/category', MoviesController.getMoviesByGenre)

router.get('/category', NewsController.getAllCategories);


export default router;
