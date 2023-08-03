import React, {useState} from 'react'
import Book from '../../../../server/models/books'

export default function Form({onSubmitFunc, movie}) {
  const [formData, setFormData] = useState(movie ?? {
    name: '',
    description: '',
    status: ''
})

const handleChange = (event) => {
    setFormData({...formData, [event.target.name] : event.target.value})
    console.log(formData)
  }  

  const submit = event => {
    event.preventDefault()
    onSubmitFunc(formData)
  }

  <div>
  <form onSubmit={submit}>
    <input placeholder='book name' onChange={handleChange} name='name' value={formData.name}></input>
    <input placeholder='description' onChange={handleChange} name='descrption' value={formData.description}></input>
    <input placeholder='status' onChange={handleChange} name='status' value={formData.status}></input >
    <button type='submit'>{book ? 'Update' : 'Add Book'}</button>
  </form>
</div>

}