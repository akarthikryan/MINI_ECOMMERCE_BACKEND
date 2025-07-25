const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log('MongoDB Database connected successfully to the '+con.connection.host);
    })
}
module.exports = connectDatabase;