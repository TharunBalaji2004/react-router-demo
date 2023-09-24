import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { useAuth } from '../utils/Auth';

const Navbar = () => {

    const auth = useAuth();

    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About Us</NavLink>
            <NavLink to='/summary'>Summary</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/profile'>My Profile</NavLink>
            {
                !auth.user && <NavLink to='/login'>Login</NavLink>
            }
        </nav>
    );
}

export default Navbar;