import express from "express"
import myplantsRoutes from "./routes/myplantsRoutes.js"
const app = express ();

app.use("/api/myplants", myplantsRoutes)



app.listen(5001, () => {
    console.log("Server started on PORT: 5001");

});