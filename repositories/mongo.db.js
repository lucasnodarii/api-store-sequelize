import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connect() {
  const dbUser = process.env.DB_MONGO_USER;
  const dbPass = process.env.DB_MONGO_PASS;
  const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.0mhz34x.mongodb.net/?retryWrites=true&w=majority`;

  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "store"
  });
}

export default connect;
