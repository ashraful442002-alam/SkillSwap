import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = `mongodb://${encodeURIComponent(process.env.DB_USER)}:${encodeURIComponent(process.env.DB_PASS)}@ac-jniil1p-shard-00-00.yigxfa1.mongodb.net:27017,ac-jniil1p-shard-00-01.yigxfa1.mongodb.net:27017,ac-jniil1p-shard-00-02.yigxfa1.mongodb.net:27017/?authSource=admin&replicaSet=atlas-h445tr-shard-0&tls=true&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const database = client.db("skillSwap");

export { client, database };
