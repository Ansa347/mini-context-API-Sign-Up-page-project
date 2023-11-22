import React from 'react';
import { useContext } from 'react';
//we import context file because we have to tell that which context we are using because we deal with alot of context at the same time
import UserContext from '../context/UserContext';

function Profile() {
     //here we have used the user from file userContextProvider for getting data
  //then we will use the usecontext and usercontext that we have imported
 const {user} = useContext(UserContext)
  //here we use conditional retirn{if else concept} instead of simple return
  
  if (!user) return <div><h1>Sign Up</h1></div>
  return  <div>Welcome {user.name} , your password: {user.password}</div>
}

export default Profile