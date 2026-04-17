import React, { createContext } from 'react';



 export const FriendContext = createContext();



 const FriendProvider = ({children}) => {

  const data = {
    name: "josim"
    
  }


  return <FriendContext.Provider value={data}>{children }</FriendContext.Provider>
};

export default  FriendProvider;