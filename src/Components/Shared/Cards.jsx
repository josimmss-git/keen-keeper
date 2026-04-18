import React from 'react';
import { Link } from 'react-router';

const Cards = ({friend}) => {
  return (
     <Link to={`/friendDetails/${friend.id}`} className="card bg-base-200 shadow-sm">

          <figure className="px-10 pt-10">
            <img
              src={friend.picture}
              alt={friend.title}
              className="rounded-full"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title">{friend.name}</h2>
            <p>{friend.
          days_since_contact}ago</p>
        <div><p className='bg-emerald-200 rounded-2xl p-2'>{friend.tags }</p></div>
       

       
        <div
  className={`p-2 text-white rounded-2xl
    ${friend.status === "on track" ? "bg-purple-500" : ""}
    ${friend.status === "Almost due" ? "bg-gray-400" : ""}
    ${friend.status === "overdue" ? "bg-red-500" : ""}
  `}
>
  {friend.status}
</div>

            
          </div>

        </Link>
  );
};

export default Cards;