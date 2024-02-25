// import React, { useEffect, useState } from 'react';
// import { fetchUserData, updateUserProfile } from './apiService';

// const UserProfile = ({ userId }) => {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await fetchUserData(userId);
//                 setUserData(data);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         fetchData();
//     }, [userId]);

//     const handleUpdateProfile = async (updatedData) => {
//         try {
//             const updatedUserData = await updateUserProfile(userId, updatedData);
//             setUserData(updatedUserData);
//         } catch (error) {
//             console.error('Error updating user profile:', error);
//         }
//     };

//     return (
//         <div>
//             {userData ? (
//                 <div>
//                     <h2>{userData.name}</h2>
//                     <p>{userData.email}</p>
//                     <button onClick={() => handleUpdateProfile({ name: 'New Name' })}>
//                         Update Profile
//                     </button>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default UserProfile;
import React from 'react'

const Test = () => {
  return (
    <div>Test</div>
  )
}

export default Test
