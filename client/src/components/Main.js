import React, {useEffect,useState} from 'react'
import axios from 'axios'
import BookCard from './BookCard/BookCard'
import Form from './Form/Form'


export default function Main() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  },[])

  //READ
  async function getBooks(){
    let API = 'http://localhost:8090/books'
    const result = await axios.get(API)
    console.log(result.data)
    setBooks(result.data)
  }

  //CREATE
  const handleAddBook = async newBookFormData => {
    const res = await axios.post('http://localhost:8090/books', newBookFormData)
    setBooks([...books, res.data])
  }

  //DELETE

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:8090/books/${id}`)
    console.log(res)
    getBooks()
  }

  //UPDATE

  const handleUpdateBook = async (book) => {
    await axios.put(`http://localhost:8090/books/${book._id}`, book)
    getBooks();
  } 

  return(
    <div>
      <Form onSubmitFunc={handleAddBook} />
      <h3>This is my Main!</h3>
      <BookCard books={books} handleDelete={handleDelete} handleUpdateBook={handleUpdateBook} />
    </div>
  )
}


