import express from "express";
import { database } from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {

  res.send("Users Route Working");

});

router.post("/", async (req, res) => {

  try {

    const usersCollection = database.collection("users");

    const user = req.body;

    const result = await usersCollection.insertOne(user);

    res.status(201).send({
      success: true,
      insertedId: result.insertedId,
    });

  } catch (error) {

    console.error("POST /users Error:", error);

    res.status(500).send({
      success: false,
      message: "Failed to create user",
    });

  }

});

export default router;