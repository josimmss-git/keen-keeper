import React from 'react';
import { NavLink } from 'react-router';
import { IoMdHome } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import MyNavLink from './MyNavLink';



const Navbar = () => {
  return (
   <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="flex-1">
   <h1 className='text-2xl font-bold'>KeenKeeper</h1>
  </div>
  <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          
     <li> 
 
           <MyNavLink to={'/'}><IoMdHome />Home</MyNavLink>
           
          </li>
          
          <li>
            <MyNavLink to={'/timeline'}><MdAccessTime />Timeline</MyNavLink>
   
      </li>
          <li>
            <MyNavLink to={'/stats'}><ImStatsDots />Stats</MyNavLink> 
      </li>
     
    </ul>
  </div>
</div>
  );
};

export default Navbar;