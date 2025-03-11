import express from 'express';
import recommendationController from '../controllers/recommendation.controller.js';
import authMiddleware from '../middlewares/token.middleware.js';

const router = express.Router();

// Route to get recommendations
router.get('/', authMiddleware.auth, recommendationController.getRecommendations);

export default router;