import express from "express";
const foodRouter = express.Router();
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
// import multer from "multer";


// Image Storage Engine
// todo fix here
// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     return cb(null, `${Date.now()}${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });

// foodRouter.post("/add",upload.single("image"), addFood);

foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter;
