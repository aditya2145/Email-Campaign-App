const mongoose = require('mongoose');
const { asyncHandler } = require('../utils/asyncHandler.js');

const connectMongoDB = asyncHandler(async(req, res) => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected', conn.connection.host);
});

module.exports = {
    connectMongoDB,
}