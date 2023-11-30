import React, { useState } from 'react'
import axios from 'axios'
import './Contact.css'
 const Contact = () => {
    
  const [fullName,setFullName]=useState('')
   const [email,setEmail]=useState('')
   const [subject,setSubject]=useState('')
  const handlePost = () => {
    axios.post('http://localhost:5000/register', { fullName,email })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
        setFullName('')
        setEmail('')
        setSubject('')
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert("Something went wrong when saving data.");
      });
  }
  return (
    <section>
      <div className="contact-container">
<h2 className="--text-center">Contact Us</h2>
<form className="--form-control--card
--flex-centre --dir-column" style={{display:'flex',flexDirection:'column',width:"500px",height:"500px"}}>
  <input type="text"
  placeholder='Full Name'
  name='user_name'required value={fullName} onChange={(e)=>setFullName(e.target.value)} style={{height:"40px"}}/>
  <input type="Email"
  placeholder='Email'
  name='user_email'required onChange={(e)=>setEmail(e.target.value)} style={{height:"40px"}}/>
  <input type="text"
  placeholder='Subject'
  name='subject'required onChange={(e)=>setSubject(e.target.value)} style={{height:"40px"}}/>
  <textarea name="message" 
  cols= "40" rows="20"></textarea>
  
</form>
<button className='sbutton'onClick={handlePost} >send message</button>
</div>
    </section>
    
   )
 }
export default Contact