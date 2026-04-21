
import Cards from '../Shared/Cards';
import { RingLoader } from 'react-spinners';
import useHooks from '../Shared/useHooks';

const FriendsCard = () => {
  
  const {friends, loading} = useHooks();
  

  
  
   

  return (
    <> 
      <div className='w-10/12 mx-auto m-10'>
        <h2 className='text-2xl font-bold'>Your Friends</h2>
      </div>
      {loading ? <div className='flex items-center justify-center text-center text-3xl'>
       <RingLoader color="#ad46ff" />
      </div>:(
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto w-10/12 mb-6'>
     
    {
      friends.map((friend,ind) => (
       <Cards friend={friend} key={ind} />
      ))
    }
  </div>
)}


 
</>
  );
};

export default FriendsCard;

