import React, { use, useContext, useState } from 'react';
import { useParams } from 'react-router';
import useHooks from '../Shared/useHooks';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { RiArchiveLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdTextsms } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { FriendContext } from '../Context/FriendProvider';
import Timeline from '../Context/Timeline';




const CardLayout = () => {


  const { id } = useParams();
  

  const { friends, loading } = useHooks();


  const expectedFriend = friends.find(
    (friend) => String(friend.id) === id
  );


  const {timelineFriends, setTimelineFriends} = useContext(FriendContext);


  if (loading) {
    return <h2>Loading...</h2>; 
  }

  
const handleTimlineFriend = () => {

  
    setTimelineFriends([...timelineFriends, expectedFriend]);
 
  
};
//  console.log(timelineFriends, "timelinefriends"); 

  return (
    <div className=' mx-auto container grid sm:grid-cols-1 md:grid-cols-2 justify-around bg-base-200 gap-5 mt-12'>
           <div className=" bg-base-200  shadow-sm text-center mt-5">

         
            <img
              src={expectedFriend.picture}
            alt={expectedFriend.title}
              
              className="rounded-full w-50 h-50 container mx-auto"></img>
      
         <h2 className='text-2xl font-bold my-4'> {expectedFriend.name} </h2>
       
         <div
    className={`p-2 text-white rounded-2xl inline-block my-4
     ${expectedFriend.status === "on track" ? "bg-purple-500" : ""}
     ${expectedFriend.status === "Almost due" ? "bg-gray-400" : ""}
     ${expectedFriend.status === "overdue" ? "bg-red-500" : "" }
     `}
>
  {expectedFriend.status}
        </div>
        <div><p className='bg-emerald-200 rounded-2xl p-2 inline-block'>{expectedFriend.tags}</p>
          <p>{expectedFriend.bio }</p>
          <p>{expectedFriend.email}</p>
        
        </div>
        <div className='m-5   '>
          <button className='btn px-10 bg-base-100 shadow-sm'><RiNotificationSnoozeLine />Snooze 2 Weeks</button><br />
          <button className='btn mt-3 bg-base-100 shadow-sm px-18'><RiArchiveLine />Archive</button><br />
          <button className='btn mt-3 px-19 bg-base-100 shadow-smtext-red-500'><MdDeleteOutline />Delete</button>
        </div>
       
          </div>

      
      <div>
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 justify-between items-center mt-4 gap-5'>
          <div className='text-center bg-base-100 shadow-sm p-4 px-10 rounded-2xl'>
             <p className='text-2xl font-bold'>{expectedFriend.days_since_contact}</p>
          <p>Days Since Contact</p>
         </div>
          <div className='text-center bg-base-100 shadow-sm p-4 px-10 rounded-2xl'>
            <p className='text-2xl font-bold'>{expectedFriend.goal}</p>
            <p>Goal(Days)</p>
          </div>
          <div className='text-center bg-base-100 shadow-sm p-4 px-10 rounded-2xl'>
            <p className='text-2xl font-bold'>{expectedFriend.next_due_date}</p>
            <p>Next Due</p>
          </div>
        
        </div>
        <div className='flex justify-between bg-base-100 shadow-sm p-4 px-10 mt-5 rounded-2xl'>
         <div> <p className='text-2xl'>Relationship Goal</p>
          <p>Current Every: <span className='text-2xl font-medium'>{expectedFriend.goal} Days</span>  </p>
          </div>
          <div>
           <button className='btn'> Edit</button>
          </div>
        </div>
        <div className='inline-block bg-base-100 shadow-sm p-10 px-10 rounded-2xl mt-4 gap-5 mx-auto'>
          <p className='text-2xl font-bold p-5'>Quick Check-In</p>
       <div className='grid grid-cols-3 justify-between items-center gap-5 mx-auto container'> 
             <button className='btn p-8' onClick={ handleTimlineFriend} ><MdAddCall />Call</button>
          <button className='btn p-8'><MdTextsms />Text</button>
          <button className='btn p-8'><FaVideo />Video</button>
      </div>
        </div>
     </div>
    </div>
  );
};

export default CardLayout;