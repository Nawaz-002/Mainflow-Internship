import './App.css'
import Heading from './Components/Heading'
import { Paragraph } from './Components/Paragraph'

function App() {
  return <>
  <div className="wrapper">
         <form action=" ">
            <h1>Login Page</h1>

         <div className="input-box">
            <input type="text" placeholder="Username" required/>
            <i className='bx bxs-user'></i>
         </div>

         <div className="input-box">
            <input type="password" placeholder="Password" required/> 
            <i className='bx bxs-lock-alt' ></i>
         </div>

         <div className="remember-forgot">
            <label><input type="checkbox"/> Remember me</label>
            <a href="forgotPass.html" ><b>Forgot Password?</b></a>
         </div>

         <button type="submit" className="btn">Login</button>

         <div className="register-link">
            <p>Don't have an account?
            <a href="register.html">Register</a></p>

         </div>

        </form>    
    </div>
  </>  
}

export default App
