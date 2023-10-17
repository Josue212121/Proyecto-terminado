import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://josuedavidps2014:prototypo@cluster0.lbe6j39.mongodb.net/?retryWrites=true&w=majority";
export const PORT = process.env.PORT || 3000;
