const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors");
const {connectDb} = require("./utils/connectDb")

const app = express();

if (proccess.env.NODE_ENV !== "production") {
    dotenv.config();
}

app.use(cors());

connectDb();



app.listen(process.env.PORT, () => {
    
})