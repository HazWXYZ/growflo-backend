import express from "express";

const router = express.Router();

router.get("/", (req,res) =>{
    res.status(200).send("Tracking plants");
 });

 router.post("/", (req,res) =>{
     res.status(201).send("Plant has been created successfully");
 });

 router.put("/:id", (req,res) =>{
    res.status(200).json({message: "Plant updated"});
});

router.delete("/:id", (req,res) =>{
    res.status(200).json({message: "Plant deleted"})
});

export default router;
