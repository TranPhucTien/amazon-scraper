import AmazonController from "../app/controllers/AmazonControllers.js";
import express from 'express';

const router = express.Router();
const amazonController = new AmazonController();

router.get('/list', amazonController.getList);

export default router;
