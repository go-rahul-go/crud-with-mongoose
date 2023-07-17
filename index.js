const connector = require("./database/computerDB");

const express = require("express");

const app = express();


app.use(express.json())
app.set("view engine", "ejs");



//read data
app.get("/", async (req, resp) => {
    let result = await connector();
    let data = await result.find();

    resp.render("table", { data });
})

//insert
app.post("/insert", async (req, resp) => {
    let data = await connector();
    let result = new data(req.body);
    let response = await result.save(); //remember to save() or data will not get stored
    resp.send(result);
})

//delete
app.delete("/delete/:_id", async (req, resp) => {
    let result = await connector();
    let data = await result.deleteOne(req.params);
    resp.send(data);
})


//update
app.put("/update/:_id", async (req, resp) => {
    let result = await connector();
    let data = await result.updateOne(
        req.params,
        { $set: req.body }
    )
    resp.send(data);

})



app.listen(4500);