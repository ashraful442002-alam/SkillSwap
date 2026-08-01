import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRoute from "./routes/users.js";
import { client, database } from "./db.js";
import skillsRoute from "./routes/skills.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());



// Routes
app.use("/users", usersRoute);
app.use("/skills", skillsRoute);



// Root Route
app.get("/", (req, res) => {
  res.send("SkillSwap Server is Running...");
});



// MongoDB Connection
async function run() {

  try {

    await client.connect();

    await client.db("admin").command({
      ping: 1
    });


    console.log("MongoDB Connected Successfully!");


  } 
  catch (error) {

    console.log("MongoDB Error:", error);

  }

}


run();



// Server Start
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});