import React, { useEffect } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

interface Props {
    // appName: String,
    pagetitle: String,
    // user: any
}

// const Header:React.FC<Props> = ({ pagetitle, appName, user }) => {
const Header:React.FC<Props> = ({pagetitle}) => {
    // const { user } = usePage().props;
    // console.log(user); // ok
    // console.log(usePage().props); // ok

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container-fluid">
                <InertiaLink href="/homepage" className="navbar-brand">appName / {pagetitle}</InertiaLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item px-3">
                            <InertiaLink href="/homepage">Home</InertiaLink>
                        </li>

                        <li className="nav-item px-3">
                            <InertiaLink href="/posts">Posts</InertiaLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <InertiaLink href="/login" className="nav-link">Login</InertiaLink>
                        </li>
                            
                        <li className="nav-item">
                            <InertiaLink href="/register" className="nav-link">Register</InertiaLink>
                        </li>
                            
                        <li className="nav-item dropdown">
                            <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                username
                            </a>

                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <InertiaLink href="/logout" className="dropdown-item">Logout</InertiaLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;