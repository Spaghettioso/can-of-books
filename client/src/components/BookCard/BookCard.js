import React from 'react'
import './BookCard.css'
import Form from '../Form/Form'

export default function BookCard({books, handleDelete, handleUpdateBook}) {

    return (
      <div>
          {books.map(book => {
              return (
                  <div key={book._id}>
                      <div>
                              {/* we're using two functions here -> anon callback, that callback invokes the handle delete. We're passing the movie id as our arugment to the handleDelete function */}
                          <p onClick={() => handleDelete(book._id)}>X</p>
                          <h3>{book.name}</h3> 
                          <p>{book.description}, {book.status}</p>
                      </div>
                      <Form onSubmitFunc={handleUpdateBook} book={book}/> 
                  </div>
              )
          })}
      </div>
    )
  }