import React from 'react';
import { useEffect,useState } from 'react';

const useHooks = () => {

   const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
  
  
    
      useEffect(() => {
        const fetchData = async () => {
          const res = await fetch("/Data.json")
          const data = await res.json();
  
          setTimeout(() => {
            setFriends(data);
          setLoading(false);
  
          }, 1000);
          
        };
        fetchData();
      }, []);
    
  return { friends, loading };
};

export default useHooks;