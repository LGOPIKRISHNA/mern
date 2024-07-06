import '../style.css';
import {Link} from 'react-router-dom';
export default function Header(){
    return(
        <div>
            <div class="side">
                <h3 style={{backgroundColor:"lightblue"}}>Flipkart</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    {/* <li>
                        <Link to="/dashboard">DashBoard</Link>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}