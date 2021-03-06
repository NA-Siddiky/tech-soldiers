import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Context } from '../../Login/Context/Context';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const NavBar = () => {

    const { user, setUser } = useContext(Context);
    const { isSignedIn, name, role } = user;

    const handleSignOut = () => {
        // console.log('Sign out clicked');
        firebase
            .auth()
            .signOut()
            .then((res) => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                };
                localStorage.removeItem('user');
                setUser(signedOutUser);
                // console.log(res);
            })
            .catch((error) => {
                console.log('Error:', error);
                console.log('Error Message:', error.message);
            });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-4" to="/">Home</Link>
                    </li>
                    {role === 'admin' ? <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/admin/dashboard/order">Admin Dashboard</Link>
                    </li> : <li className="nav-item active">
                        <Link className="nav-link mr-4" to="/user/dashboard/order">Dashboard</Link>
                    </li>}


                    <li className="nav-item active">
                        <Link className="nav-link mr-4" to="#">Blogs</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-4" to="#">Contact Us</Link>
                    </li>

                    {!isSignedIn ? (
                        <li className="nav-item">
                            <Link className="nav-link  btn btn-primary" to="/login">
                                Login
                            </Link>
                        </li>
                    ) : (
                        <li className="nav-item d-flex">
                            <button
                                className="btn btn-success "
                                onClick={handleSignOut}
                            >
                                {name}
                                <RiLogoutCircleRLine />
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;