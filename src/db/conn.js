const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, // or createIndexes: true
            // other options as needed
        });
        console.log('Connection to MongoDB successful');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

// module.exports = connectDB;
