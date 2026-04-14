import React from 'react';

import { NavLink } from 'react-router';


const MyNavLink = ({ to, children }) => {
  return (
     <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? "bg-[#64748B] text-white border-b-2 border-black flex items-center gap-2 px-4 py-2 rounded"
        : "bg-white text-black flex items-center gap-2 px-4 py-2 rounded"
    }
  >
   
{children}
  </NavLink>
  );
};

export default MyNavLink;