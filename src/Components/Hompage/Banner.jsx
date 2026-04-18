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

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 container mx-auto gap-8 max-w-10/12'>
         <div className='text-center bg-base-200 shadow-sm py-4'>
        <p className='text-[#244D3F] text-2xl font-medium'>10</p>
        <p className='text-[#64748B] '>Total Friend</p>  </div>
          
        
         <div className='text-center bg-base-200 shadow-sm py-4'>
        <p className='text-[#244D3F] text-2xl font-medium'>3</p>
        <p className='text-[#64748B]'>On truck</p>
        </div>
        
         <div className='text-center bg-base-200 shadow-sm py-4'>
        <p className='text-[#244D3F] text-2xl font-medium'>6</p>
        <p className='text-[#64748B]'>Need Attention</p>
        </div>
        
         <div className='text-center bg-base-200 shadow-sm py-4'>
        <p className='text-[#244D3F] text-2xl font-medium'>12</p>
        <p className='text-[#64748B]'>Interactions This Month</p>
        </div>
       </div> 
   
    <FriendsCard />
    </div>
  );
};

export default Banner;
