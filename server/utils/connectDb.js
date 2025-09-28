const mongoose = require("mongoose")

if (proccess.env.NODE_ENV !== "production") {
    dotenv.config();
}

module.exports.connectDb = function() {
    mongoose.connect(proccess.env.MONGO_URI)
        .then(() => console.log("Connected to DB."))
        .catch(() => console.log("Couldn't connect to DB."))
}