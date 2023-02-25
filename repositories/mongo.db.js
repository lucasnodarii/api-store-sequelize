import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();

function getClient() {
  const dbUser = process.env.DB_MONGO_USER;
  const dbPass = process.env.DB_MONGO_PASS;
  const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.0mhz34x.mongodb.net/?retryWrites=true&w=majority`;
  return new mongodb.MongoClient(uri);
}

export default getClient;
