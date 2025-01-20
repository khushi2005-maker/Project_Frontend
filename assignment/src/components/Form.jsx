import React, {useState} from 'react'
import axios from "axios";

export default function Form() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const setSubmit = async (e)=>{
  e.preventDefault();
  const data={      
    name, 
    email,
    message
  };
  
  try {
    const response = await axios.post("http://localhost:3000/register", data);
    console.log(response); 
    
  } catch (err) {}
}

  return <>
    <div className="main" style={{marginLeft: 500}}>
      <form action="" onSubmit={setSubmit}>
      <div>
        <h1>Form</h1>
      </div>
      <div className="name">
        <label>Name:</label>
        <input type="text" style={{borderColor: 'red', borderRadius: 7}} onChange={(e)=>{setName(e.target.value)}}/>
      </div>
      <div className="email" style={{marginTop: 10}}>
        <label>Email:</label>
        <input type="email" style={{borderColor: 'red', borderRadius: 7}} onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <div className="message" style={{marginTop: 10}} onChange={(e)=>{setMessage(e.target.value)}}>
        <label>Message:</label>
        <textarea style={{borderColor: 'red', borderRadius: 7}}/>
      </div>
      <div className="submit" style={{marginTop: 10, paddingLeft: 75}}>
        <button onClick={setSubmit}>Submit</button>
      </div>
      
      </form>
    </div>
    <ul>
      
    </ul>
  </>
}