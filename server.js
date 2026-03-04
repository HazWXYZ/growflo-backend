import express from "express"

const app = express ();

app.get("/api/myplants", (req,res) =>{
    res.status(200).send("Tracking plants");
});

app.post("/api/myplants", (req,res) =>{
    res.status(201).send("Plant has been created successfully");
});

app.put("api/myplants/:id", (req,res) =>{
    res.status(200).json({message: "Plant updated"})
})

app.delete("api/myplants/:id", (req,res) =>{
    res.status(200).json({message: "Plant deleted"})
})

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");

});