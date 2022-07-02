import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
      <div className='header'>
          <Link to={"/login"}><nav>Login</nav></Link>
          <Link to={"/signup"}><nav>SignUp</nav></Link>
    </div>
  )
}

export default Header;
