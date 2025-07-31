const dotenv = require('dotenv');
dotenv.config();

const { connectMongoDB } = require('./db/connectMongoDB');
const app = require('./app.js');
const { emailRunner } = require('./utils/emailRunner.js');

const PORT = process.env.PORT || 5000;

setInterval(() => {
    emailRunner();
}, 60*1000);

app.listen(PORT, async() => {
    console.log(`Server is running at PORT: ${PORT}`);
    await connectMongoDB();
})