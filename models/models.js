import mongoose from "mongoose";

const { Schema } = mongoose;
const modelSchema = new Schema(
    name:{
        type: String,
        required:true,
        unique:true,
    },
    {

        collection: "nameOfCollection",
    }
);
export default mongoose.model("ModelName", modelSchema);