import { Link, NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";

const Products = () => {
    return (
        <>
            <div>
                <input type="search" placeholder="Search Products" />
            </div>
            <nav>
                <NavLink to="featured">Featured</NavLink>
                <NavLink to="new">New</NavLink>
            </nav>
            <Outlet />
        </>   
    );
}

export default Products;
