import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import menu from '../../assets/images/menu.svg';
import './styles.scss';

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();
    const [drawerActive, setDrawerActive] = useState(false);

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location])

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="bg-primary main-nav">

            <Link to="/" className="nav-logo-text">
                <h4>DS Catalog</h4>
            </Link>
            <button
                type="button"
                className="menu-mobile-btn"
                onClick={() => setDrawerActive(!drawerActive)}
            >
                <img src={menu} alt="Mobile Menu" />
            </button>

            <div className={drawerActive ? "menu-mobile-container" : "menu-container"}>
                <ul className="main-menu">
                    <li>
                        <NavLink
                            to="/"
                            activeClassName="active"
                            exact
                            className="nav-link"
                            onClick={() => setDrawerActive(false)}
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            activeClassName="active"
                            className="nav-link"
                            onClick={() => setDrawerActive(false)}
                        >
                            CATÁLOGO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin"
                            activeClassName="active"
                            className="nav-link"
                            onClick={() => setDrawerActive(false)}
                        >
                            ADMIN
                        </NavLink>
                    </li>
                    {drawerActive && (
                        <li>
                            {currentUser && (
                                <a
                                    href="#logout"
                                    className="nav-link active d-inline"
                                    onClick={(e) => {
                                        setDrawerActive(false);
                                        handleLogout(e);
                                    }}
                                >
                                    {`LOGOUT - ${currentUser}`}
                                </a>
                            )}
                        </li>
                    )}
                    {drawerActive && (
                        <>
                            {!currentUser && (
                                <li>
                                    <Link
                                        to="/auth/login"
                                        className="nav-link active"
                                        onClick={() => setDrawerActive(false)}
                                    >
                                        LOGIN
                                    </Link>
                                </li>
                            )}
                        </>
                    )}
                </ul>
            </div>
            <div className="user-info-dnone text-right">
                {currentUser && (
                    <>
                        {currentUser}
                        <a
                            href="#logout"
                            className="nav-link active d-inline"
                            onClick={handleLogout}
                        >
                            LOGOUT
                        </a>
                    </>
                )}
                {!currentUser && (
                    <Link to="/auth/login" className="nav-link active">
                        LOGIN
                    </Link>
                )}
            </div>
        </nav>
    )
};

export default Navbar;