import React from 'react'
import { useState , useContext } from 'react';
import UserContext from '../context/UserContext';
function Signup() {
    const [name ,setName]= useState('');
    const [password , setPassword]=useState(''); 

    const {setUser} = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        // here we are getting the value of input name and password and we'll use the name from usestate
        setUser({name , password})
}
//for disabled btn
const isSubmitDisabled = !name || !password;
  return (
    <>
    <section>
  <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
      
      {/* <p className="mt-2 text-base text-gray-600">
        Already have an account?{" "}
        <a
          href="#"
          title=""
          className="font-medium text-black transition-all duration-200 hover:underline"
        >
          Sign in
        </a>
      </p> */}
      <form action="#" method="POST" className="mt-8">
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="text-base font-medium text-gray-900">
              {" "}
              Full Name{" "}
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Full Name"
                id="name" value={name} onChange={(e)=>setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-base font-medium text-gray-900">
                {" "}
                Password{" "}
              </label>
            </div>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Password"
                id="password" value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className={`inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 hover:bg-black/80 ${isSubmitDisabled ? 'bg-gray-400 text-gray-800 cursor-not-allowed' : 'bg-black text-white'}`}
              disabled={isSubmitDisabled}
              onClick={handleSubmit}
            >
              Create Account{" "}
             
            </button>
          </div>
        </div>
      </form>
      
    </div>
  </div>
</section>

    </>
  )
}

export default Signup