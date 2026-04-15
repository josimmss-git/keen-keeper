import React from 'react';
import { useParams } from 'react-router';
import useHooks from '../Shared/useHooks';

const CardLayout = () => {
  const { id } = useParams();
    console.log(id, 'id');

  const { friends, loading } = useHooks();
  const expectedFriend = friends.find((friends) => String(friends.id) === id);
  console.log(friends, loading, 'friends', 'loading');
  console.log(expectedFriend, 'all fridend')
  
  if (loading) {
    return <h2>loading...</h2>
  }
  return (
    <div className='container mx-auto'>
      <img src={expectedFriend.picture} alt="" />
      <h2>Name: {expectedFriend.name }</h2>
    </div>
  );
};

export default CardLayout;