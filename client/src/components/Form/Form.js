import React, {useState} from 'react'


export default function Form({onSubmitFunc, book}) {
  const [formData, setFormData] = useState(book ?? {
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
    console.log("form submit")
  }

  return (
    <div>
    <form onSubmit={submit}>
      <input placeholder='book name' onChange={handleChange} name='name' value={formData.name}></input>
      <input placeholder='description' onChange={handleChange} name='description' value={formData.description}></input>
      <input placeholder='status' onChange={handleChange} name='status' value={formData.status}></input >
      <button type='submit'>{book ? 'Update' : 'Add Book'}</button>
    </form>
  </div>
)

}