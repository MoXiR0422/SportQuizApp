const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const authUser = require("./Router/auth");
const createQuiz = require("./Router/uploadTest");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.use("/app/sport/login",authUser);
app.post('/api/uploadQuiz',upload.single("excelFile"),createQuiz);


 
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log("server is running");
})