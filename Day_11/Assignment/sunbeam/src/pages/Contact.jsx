import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    alert("Form Submitted Successfully!")
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <br/><br/>

        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <br/><br/>

        <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>
        <br/><br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
