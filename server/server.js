const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bp = require('body-parser');
const Book = require("./models/books")
require('dotenv').config();

const PORT = process.env.port || 8090;

const app = express();
app.use(cors());
app.use(bp.json());


mongoose.connect(process.env.DATABASE_URL).then(() => console.log('DB Connected'))

app.get("/", (request, response)=>{
    response.status(200).json("howdy yall")
})

// CRUD: READ

app.get("/books", async (request, response) => {
    // console.log(request)
    try {
        const allBooks = await Book.find();
        response.status(200).json(allBooks);
    } catch (err) {
        // console.log(err)
        response.status(404).json(err)
    }
})

// CRUD: CREATE

app.post("/books", async(request, response) => {
    try {
        const newBook = await Book.create(request.body)
        response.status(200).json(newBook)
    } catch (error) {
        // console.log(err)
        response.status(404).json(err)
    }
})

// CRUD: UPDATE

app.put('/books/:id', async  (request, response) => {
    // console.log(request.params.id);
    console.log("put")
    try {
        await Book.findByIdAndUpdate(request.params.id, request.body);
        response.status(204).send()
    } catch (err) {
        response.send(err)
    }
})

// GET REQUEST  /books/123,
// app.get("/books/:id", async (request, response) => {
//     console.log(request);
//     const theBook = await Book.find({ _id: request.params.id });
//     response.json(theBook);
//   });

// CRUD: DELETE


app.delete('/books/:id' , async (request, response) => {
    console.log("delete")
    try {
        const id = request.params.id;
        // console.log(id)
        const deletedBook = await Book.findByIdAndDelete(id)
        response.status(200).json(deletedBook)
    } catch (err) {
        response.status(500).json(err)
    }
})



app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}`))