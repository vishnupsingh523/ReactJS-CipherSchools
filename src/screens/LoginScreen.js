import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {

  const [state, setState] = useState();

  return (
      <div className='login-screen'>
          <h1>Enter details to login !</h1>
          <form>
              <div>
                  <label>Email: </label>
          <input type="email" name="email" onChange={(e) => {
            console.log(e);
            setState({ ...state, email: e.target.value });
                  }} />
              </div>
              <div>
                  <label>Password: </label>
                  <input type="password" name="password" />
              </div>

              <button type='submit'>Login</button>

              <Link to={'/signup'}>
                <button>Not a user? SignUp</button>
              </Link>
          </form>
    </div>
  )
}

export default LoginScreen
