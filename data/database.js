import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "backendapi" })
    .then(() => {
      console.log("dababase connected!!!");
    })
    .catch((error) => {
      console.error("error in connecting to the db", error);
    });
};
