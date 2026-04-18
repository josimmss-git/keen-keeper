import React, { useContext } from 'react';
import { FriendContext } from './FriendProvider';

const Timeline = () => {

  const {timelineFriends, setTimelineFriends} = useContext(FriendContext);
  
  console.log(timelineFriends, "contextdata");
  return <div>
    {
      timelineFriends.map((friend, ind) => {
        return <div kdy={ind}>
          <img src={friend.picture} alt="" />
          <h2>{friend.name }</h2>


        </div>
         })
 }
  </div>;

    
 
}
export default Timeline;