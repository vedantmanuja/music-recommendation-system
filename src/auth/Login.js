import "../auth/auth.css"
import { Link } from 'react-router-dom';

const Login = () => {
    
    
    return (
        <form>
            <h3>login to your account</h3>
            <div className="wrapper">
                <input type="email" placeholder="enter your email" id="email"/>
            </div>
            <div className="wrapper">
                <input type="password" placeholder="enter your password" id="password"/>
            </div>
            <div className="wrapper">
                <button> <Link to="/Home">login</Link> </button>
            </div>
            <div className="wrapper">
                <p className="signup-link">Don't have an account? <a href="/Signup">Signup</a></p>
            </div>

        </form>
    );
}
 
export default Login;