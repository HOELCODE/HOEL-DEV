import express from "express";

import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// Récupérer une collection entière
router.get("/", async (req, res) => {
    let collection = await db.collection("records");
    let results = collection.find({}).toArray();
    res.send(results).status(200)
});

// Récupérer juste un id de la collection
router.get("./:id", async (req,res) => {
    let collection = await db.collection("records");
    let query = { id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// Envoyer un nouveau record
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
        res.status(500).send("Error adding record");
    }
});

// Modifier un nouvel ID
router.patch("/:id", async (req, res) => {
    try {
        const query = {_id: new ObjectId(req.params.id)};
        const updates = {
            $set: {
                name: req.body.name,
                position: req.body.position,
                level: req.body.level,
            },
        };

        let collection = await db.collection("records");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
});

// Supprimer un nouvel ID
router.delete("/:id", async (req, res) => {
    try {
        const query = {id: ObjectId(req.params.id)};

        const collection = await db.collection("records");
        let result = await collection.deleteOne(query, deletes);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting recortd")
    }
});

export default router;
