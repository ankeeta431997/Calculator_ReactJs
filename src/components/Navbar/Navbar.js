import React from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom'
//import AuthorizationService from '../../services/auth.service';
import Logout from '../Logout/Logout';

const Navbar = () => {
  
  // let navigate = useNavigate();
  // const handleLogout = () => {
  //   AuthorizationService.logout();
  //    navigate("/login");

  // };

  return (
    <div className='navbar'>
      <div className='link'>
        <Link to="/login">Login</Link>
      </div>
      <div className='link'>
        <Link to="/">Home</Link>
      </div>
      <div className='link'>
        <Link to="/register">Register</Link>
      </div>
      <div className='link'>
        <Logout /> {/* Add the Logout component */}
      </div>
    </div>
  )
}

export default Navbar
