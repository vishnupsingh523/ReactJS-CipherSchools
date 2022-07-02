import {Component} from 'react';
import { Link } from 'react-router-dom';

class LoginScreen extends Component{
  
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    // console.log(this.state);
  };
  render() {
    
    return (
      <div className='login-screen'>
        <h1>Enter details to login !</h1>
        
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state);
        }}>

          <div>
            <label>Email: </label>
            <input type={"email"} name={"email"} onChange={this.handleInputChange} value={this.state.email} />
          </div>

          <div>
            <label>Password: </label>
            <input type={"password"} name={"password"} onChange={this.handleInputChange} value={this.state.password} />
          </div>

          <button type='submit'>Login</button>

          <Link to={'/signup'}>
            <button>Not a user? SignUp</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default LoginScreen
