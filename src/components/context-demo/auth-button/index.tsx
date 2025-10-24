import  { useContext } from 'react'
import { AuthContext } from '..';

export const AuthButton = () => {


  const { isLoggedIn, login, logout } = useContext(AuthContext)
  return (
    <div>
      <button className={`border ${isLoggedIn ? 'border-red-500' : 'border-green-500'} px-4 py-2 rounded`} onClick={isLoggedIn ? logout : login} >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}
