const mongoose = require('mongoose');

require('dotenv').config();

const connection = async () => {
    try{
        // connect mongoose to mongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log('I did a thing!');
    }catch(err){
        console.log(err);
    }
}
connection();