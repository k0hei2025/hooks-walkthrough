import  { useContext } from 'react'
import { AuthContext } from '..';

export const AuthView = () => {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <div><p>{isLoggedIn ? 'you are logged In' : 'you are logged Out'}</p></div>
  )
}
