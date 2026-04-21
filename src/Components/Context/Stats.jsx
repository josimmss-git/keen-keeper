
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from './FriendProvider';
import Call from '../../assets/call.png';
import Text from '../../assets/text.png';
import Video from '../../assets/video.png';

const Stats = () => {

  const { timelineFriends } = useContext(FriendContext);
  
  const callCount = timelineFriends.filter(friend => friend.type === "Call").length;
  const textCount = timelineFriends.filter(friend => friend.type === "Text").length;
  const videoCount = timelineFriends.filter(friend => friend.type === "Video").length;
  
const data = [
  { name: 'Call', value: callCount, fill: '#0088FE' },
  { name: 'Text', value: textCount, fill: '#00C49F' },
  { name: 'Video', value: videoCount, fill: '#FFBB28' },
  
];
  return (
    <div>
      <h2 className='text-3xl font-semibold p-10'>Friendship Analytics</h2>
       <div className=' py-10 flex shadow p-10 rounded-md border-slate-300 container mx-auto'>
    <h1 className='text-2xl mb-16 text-center'>By Interaction Type</h1>
         <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', margin:"auto", aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      
        />
        <Legend />
        <Tooltip />
    </PieChart>
    </div>
    </div>
    
  );
};

export default Stats;