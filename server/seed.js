const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/book");

async function seed(){
    await Book.create(
    {
        name: "The Bible",
        description: "A holy scripture of the Christian religion",
        status: true
    }
    );

    await Book.create(
    {
            name: "The Qur'an",
            description: "The Qur'an contains prayers, moral guidance, historical narrative, and promises of Paradise.",
            status: true
    }
    );

    await Book.create(
    {
                name: "The Torah",
                description: "Torah in Hebrew can mean teaching, direction, guidance and law",
                status: true
    }
    );
    console.log("go book go")
    mongoose.disconnect();
}

seed();