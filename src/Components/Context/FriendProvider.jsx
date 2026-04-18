import React, { createContext } from 'react';
import { useState } from 'react';




 export const FriendContext = createContext();

   


const FriendProvider = ({ children }) => {
   
    const [timelineFriends, setTimelineFriends] = useState([]);

   const data = {
    timelineFriends,
     setTimelineFriends,
    
   };


  return <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
};

export default  FriendProvider;