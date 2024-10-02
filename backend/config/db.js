import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ismail:wVszwJiN3K1d5LcG@cluster0.krei0.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
