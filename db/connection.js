const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.URL_DB+ process.env.DB);
        console.log('Connection Success');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    dbConnection
}