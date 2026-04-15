import React, { useEffect } from 'react';
import { useState } from 'react';

const FriendsCard = () => {

  const [Friends, setFriends] = useState([]);


  
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch("/Data.json")
        const data = await res.json();
        console.log(data);
        setFriends(data);
      };
      fetchData();
    }, []);
  console.log(Friends, "friends");

  return (


   

    <div className='max-w-10/12'>
      <h2>total friends:{Friends.length }</h2>
         <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
   
    
  </div>
</div>
   </div> 

  );
};

export default FriendsCard;