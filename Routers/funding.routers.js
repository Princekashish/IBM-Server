// routes/fundraiserRoutes.js
import express from 'express';
import authenticateToken from '../Middlewares/Auth.middlewares.js';
import { createFundraiser, getFundraisers } from '../Controllers/funding.controller.js';


const router = express.Router();

router.post('/create', authenticateToken,createFundraiser);
router.get('/', getFundraisers);

export default router;
