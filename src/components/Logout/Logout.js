import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove the user data from local storage
    navigate('/login'); // Redirect to the login page
  };

  return (
    <button className='link' onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
