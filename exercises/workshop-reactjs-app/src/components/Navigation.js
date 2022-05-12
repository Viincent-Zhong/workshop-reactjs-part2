import { NavLink } from "react-router-dom";
import '../App.css'

function Navigation() {
    return (
    <div className="navigation">
        <ul>
        <NavLink to="/" className='App-link'>Home</NavLink>
        <NavLink to="/about" className='App-link'>About</NavLink>
        </ul>
    </div>
    );
}

export default Navigation