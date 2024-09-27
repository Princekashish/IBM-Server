// routes/fundraiserRoutes.js
import express from 'express';
import authenticateToken from '../Middlewares/Auth.middlewares.js';
import { createFundraiser, deleteFundraiser, getFundraisers, getFundraisersByUser, updateFundraiser, } from '../Controllers/funding.controller.js';


const router = express.Router();

router.post('/create', authenticateToken,createFundraiser);
router.get('/', getFundraisers);
router.get('/user', authenticateToken, getFundraisersByUser);
router.put('/:id', authenticateToken, updateFundraiser);
router.delete('/:id', authenticateToken, deleteFundraiser);


export default router;
