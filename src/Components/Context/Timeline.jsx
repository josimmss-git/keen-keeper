import React, { useContext } from 'react';
import { FriendContext } from './FriendProvider';
import Call from '../../assets/call.png'

const Timeline = () => {

  const {timelineFriends, setTimelineFriends} = useContext(FriendContext);
  
  console.log(timelineFriends, "contextdata");
  return <div className='bg-slate-100 flex-1 container mx-auto p-5'>
    <h2 className='text-2xl font-bold'>Timeline</h2>
    {
      timelineFriends.map((friend, ind) => {
        return <div key={ind} className='flex items-center shadow p-4 rounded-md container mx-auto bg-white'>
        
          <div className=''>
            <img src={Call} alt="" className='w-8' />
          </div>
          <div className='px-5'>
            <h2>Call with {friend.name}</h2>
          <p>{friend.next_due_date}</p>,
          </div>
     


        </div>
         })
 }
  </div>;

    
 
}
export default Timeline;
