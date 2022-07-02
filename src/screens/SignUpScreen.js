import {Link} from 'react-router-dom'

const SignUpScreen = () => {
  return (
    <div className='signup-screen'>
        <h1>Enter details to SignUp !</h1>
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" name="fname" />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lname" />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name="email" />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" />
            </div>

              <div className='buttonDiv'>
              <button type='submit'>SignUp</button>
            
            <Link to={'/login'}>
            <button>Already a user? Login</button>
            </Link>
              </div>
            
        </form>
    </div>
  )
}

export default SignUpScreen
