const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/e-store";


const computer_schema = mongoose.Schema({
    model:String,
    brand:String,
    price:Number,
    os:String,
    colors:Array
})


const dbConnect = async ()=>{
    await mongoose.connect(url);

    return mongoose.model("computers",computer_schema);
}

module.exports = dbConnect;