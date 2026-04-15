import React from 'react';
import MyNavLink from '../Shared/MyNavLink';
import FriendsCard from './FriendsCard';


const Banner = () => {
  return (

    <div className='container mx-auto'>
      <div className='text-center p-10 '>
        <h2 className='text-3xl font-bold py-3 text-[#1F2937]'>Friends to keep close in your life</h2>
        <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.</p>
       <button className='pt-4'> <MyNavLink>+Add Friends</MyNavLink></button>
      </div>

      <div className='flex justify-between container mx-auto max-w-10/12'>
         <div className='text-center border-amber-300 bg-base-200 shadow-2xl rounded-2xl'>
        <p className='text-[#244D3F] text-2xl font-medium'>10</p>
        <p className='text-[#64748B]'>Total Friends</p>
        </div>
        
         <div className='text-center border-amber-300 bg-base-200 shadow-2xl rounded-2xl'>
        <p className='text-[#244D3F] text-2xl font-medium'>10</p>
        <p className='text-[#64748B]'>Total Friends</p>
        </div>
        
         <div className='text-center border-amber-300 bg-base-200 shadow-2xl rounded-2xl'>
        <p className='text-[#244D3F] text-2xl font-medium'>10</p>
        <p className='text-[#64748B]'>Total Friends</p>
        </div>
        
         <div className='text-center border-amber-300 bg-base-200 shadow-2xl rounded-2xl'>
        <p className='text-[#244D3F] text-2xl font-medium'>10</p>
        <p className='text-[#64748B]'>Total Friends</p>
        </div>
       </div> 
   
    <FriendsCard />
    </div>
  );
};

export default Banner;
