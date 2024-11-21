const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://manikant2123:n4971K1h9FeDSwQ2@cluster0.bppu43r.mongodb.net/inventory-system"

const connectToMongo  = async() =>{
    try{
        mongoose.connect(mongoURI);
        console.log("connected to mongo Successfully!")
    }
    catch(error){
        console.log(error);
    }
};
module.exports = connectToMongo;