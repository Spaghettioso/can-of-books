const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bp = require('body-parser');
require('dotenv').config();

const PORT = process.env.port || 8090;

const app = express();
app.use(cors());
app.use(bp.json());

const Book = require("./models/book")
mongoose.connect(process.env.DATABASE_URL)

app.get("/", (request, response)=>{
    response.status(200).json("howdy yall")
})

app.get("/book", async (request, response)=>{

    const allBooks = await Book.find(request.query);
    response.status(200).json(allBooks);

})


app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}`))