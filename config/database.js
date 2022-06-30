require('dotenv').config();
const mongoose = require('mongoose');

const URI = process.env.MONGO_DB_URI;

async function connectDB() {
    try {
        await mongoose.connect(URI);
        console.log('Succesffull connection with dataase: ');
    } catch (error) {
        console.log('Connection data base error: ', error);
        process.exit(1);
    }
}

module.exports = connectDB;
