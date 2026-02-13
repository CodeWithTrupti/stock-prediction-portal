import {useContext} from 'react'
import Button from './Button'
import { Link ,useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {
  const{isLoggedin,setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log('loggedout');
    navigate('/login')
  }
  return (
    <>
       <nav className='navbar container pt-3 pb-3 align-items-start'>
         <Link className="navbar-brand text-light" to="/">Stock Prediction Portal</Link>
         <div>
          {isLoggedin ?(
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
          ):(

            <>

            <Button text='Login' class="btn-outline-info" url="/login"/>
            &nbsp;
            <Button text='Register'class="btn-info" url="/register"/>
            </>

          )}
            
         </div>

       </nav>
    </>
  )
}

export default Header