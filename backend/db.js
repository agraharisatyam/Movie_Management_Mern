const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/mernExam').then(() => {
            console.log('Connected to MongoDB');
        }).catch((err) => {
            console.log('Error connecting to MongoDB:', err);
        });

    } catch (err) {
        console.log('Error connecting to MongoDB:', err);
       
    }       
};

module.exports = connectDB;