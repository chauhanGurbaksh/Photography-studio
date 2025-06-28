const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Mongo DB Connected...');
    } catch (error) {
        console.log('Mongo Db Error ', error);
    }
}

module.exports = dbConnection;