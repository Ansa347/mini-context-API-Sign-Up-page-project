import React from 'react'
import { useState , useContext } from 'react';
import UserContext from '../context/UserContext';
function login() {
  const [name ,setName]= useState('');
  const [password , setPassword]=useState('');  
  //here we have used the setUser from file userContextProvider for passing data
  //then we will use the usecontext and usercontext that we have imported
 const {setUser} = useContext(UserContext)
 //firstly we'll use a event in arrow function(e) then we will prevent the behaviour of the event e . We will preventDefault() because by default value will be submitted somewhere from URL or through the post method and we want to avoid that
  const handleSubmit = (e) => {
          e.preventDefault()
          // here we are getting the value of input name and password and we'll use the name from usestate
          setUser({name , password})
  }
  return (
    <div>
        <h2>login</h2>
        <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
<button onClick={handleSubmit}>Submit</button>
        </div>
  )
}

export default login