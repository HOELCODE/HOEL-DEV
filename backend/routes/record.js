import express from "express";
import db from "../db/connection.js"

import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await db.collection("records");
    let results = await collection.db.find({}).toArray();
    results.send(results).status(200);
})

router.get("/:id", async (req, res) => {
    let collection = await db.collection("records");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if (!result) res.send("no found").status(500);
    else res.send(result).status(200);
})

router.post("/", async (req, res) => {
    try {
        let newDocument = {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        };
        let collection = await db.collection("records");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("error ding record")
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const query = {_id: newObjectId(req.params.id)};
        const updates = {
            $set: {
                name: req.body.name,
                position: req.body.position,
                level: req.body.position
            }
        }

        let collection = await db.collection("records");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("error updating record")
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const query = {_id: newObjectId(req.params.id)};

        const collection = await db.collection("records");
        let result = collection.deleteOne(query);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("error deleting record")
    }
});

export default router;