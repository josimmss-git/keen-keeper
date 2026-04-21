import React, { useContext } from 'react';
import { FriendContext } from './FriendProvider';
import Call from '../../assets/call.png';
import Text from '../../assets/text.png';
import Video from '../../assets/video.png';




const Timeline = () => {

  const { timelineFriends } = useContext(FriendContext);
    
 

  return (
    <div className='bg-slate-100 flex-1 container mx-auto p-5'>
      <h2 className='text-2xl font-bold'>Timeline</h2>

      {
        timelineFriends.map((friend, ind) => (
          <div key={ind} className='flex items-center shadow p-4 rounded-md bg-white mb-3'>

           
            <div>
              {friend.type === "Call" && (
                <img src={Call} className='w-8' />
              )}

              {friend.type === "Text" && (
                <img src={Text} className='w-8' />
              )}

              {friend.type === "Video" && (
                <img src={Video} className='w-8' />
              )}
            </div>

        
            <div className='px-5'>
              <h2>{friend.type} with {friend.name}</h2>
              <p>{friend.date}</p>
            </div>

          </div>
        ))
      }

    </div>
  );
};

export default Timeline;
