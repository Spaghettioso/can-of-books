import React, {useEffect,useState} from 'react'
import axios from 'axios'


export default function Main() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  },[])

  async function getBooks(){
    let API = 'http://localhost:8090/books'
    const result = await axios.get(API)
    console.log(result.data)
    setBooks(result.data)
  }




}


