import express from "express";
const cartRouter=express.Router()
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";


cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,getCart)

export default cartRouter;
