// routes/fundraiserRoutes.js
import express from 'express';
import authenticateToken from '../Middlewares/Auth.middlewares.js';
import { createFundraiser, getFundraisers, getFundraisersByUser } from '../Controllers/funding.controller.js';


const router = express.Router();

router.post('/create', authenticateToken,createFundraiser);
router.get('/', getFundraisers);
router.get('/myfundraisers', authenticateToken, getFundraisersByUser);

export default router;
