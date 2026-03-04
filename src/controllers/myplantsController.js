export function getAllPlants(req, res) {
    res.status(200).send("Tracking plants");
}

export function createPlant(req, res) {
    res.status(201).send("Plant has been created successfully");
}

export function updatePlant(req, res) {
    res.status(200).json({ message: "Plant updated" });
}

export function deletePlant(req,res) {
    res.status(200).json({message: "Plant deleted"});
}