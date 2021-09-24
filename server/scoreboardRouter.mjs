import express from "express";

import * as db from "./db.mjs";

const scoreboardRouter = express.Router();

//get ALL players
scoreboardRouter.get("/", async (req, res) => {
  try {
    const allPlayers = await db.getPlayers();
    res.json(allPlayers);
    console.log("hey!");
  } catch (err) {
    console.log(err.message);
  }
});

// taskRouter.use(express.json());
// taskRouter.post("/", async (request, response) => {
//   const task = await db.addTask(request.body.name);
//   response.status(201).json(task);
// });

export default scoreboardRouter;
