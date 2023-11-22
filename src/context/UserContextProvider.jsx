// step 2
import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";


const UserContextProvider = ({children}) => {
 //even after providing property .provider we will get error and we have to pass a data
 const [user ,setUser] =  useState("");
    return(
    //here we have to pass a property .provider with context name
    //along with .provider we also pass value (prop to pass data) 
    //method of passing only a value value={user}
    //this is the method of passing object 
    <UserContext.Provider value={{user ,setUser}}>
    {children}
    </UserContext.Provider>
)
}

export default UserContextProvider