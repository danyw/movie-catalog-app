import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './profile.css'
import { useUser, useUserUpdate } from "../Context/UserProvider";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const updateUser = useUserUpdate();


useEffect(() => {
  if (isAuthenticated) {
    updateUser(user.sub);
  }
  
}, [isAuthenticated, updateUser, user]);
//TODO is it in the infinite loop?
  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    isAuthenticated && (
      <div className='profile'>
        <img className='img' src={user.picture} alt={user.name} />
        <h2 className='profile-name'>{user.name}</h2>
      </div>
    )
  )
}

export default Profile
