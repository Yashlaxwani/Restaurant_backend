import express from "express";
import { login,signup,logout} from  "../controller/authController.js";
import { isAuthenticated } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/logout', isAuthenticated, logout);

export default router;
