import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/AuthContext';

const Navigation = () => {

    const {user, logOut} = useContext(MyContext);
    console.log(user?.email);

    const logoutHandel = () =>{
        logOut()
        .then(result=>{
            // console.log(result);
           
        })
        .catch(error=>{
            // console.error(error);
        })
    }

    

    return (
        <div className='bg-primary'>
            <nav>
                {/* <div className="navbar bg-primary text-primary-content">
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>M.M.S.S</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/login'>LogIn</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                </div> */}


                <div className="navbar bg-primary-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link className="btn btn-ghost normal-case text-xl" to='/main'>Main</Link></li>
                                <li> <Link className="btn btn-ghost normal-case text-xl" to='/login'>LogIn</Link></li>
                                {/* <li tabIndex={0}>
                                    <a className="justify-between">
                                        Parent
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li> */}
                                <li><Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link></li>
                                <li><Link className="btn btn-ghost normal-case text-xl" to='/order'>Order</Link></li>
                               
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-xl" to='/'>M.M.S.S</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <li> <Link className="btn btn-ghost normal-case text-xl" to='/main'>Main</Link></li>
                            <li> <Link className="btn btn-ghost normal-case text-xl" to='/login'>LogIn</Link></li>
                            
                            {/* <li tabIndex={0}>
                                <a>
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li> */}
                            <li><Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link></li>
                            <li><Link className="btn btn-ghost normal-case text-xl" to='/order'>Order</Link></li>
                            
                            <p  className="btn btn-ghost normal-case text-xl">welcome {user?.email}</p>
                        </ul>
                    </div>
                    <div className="navbar-end">
                       {user?.uid? <button onClick={logoutHandel} className="btn">Logout</button>
                        :<Link className="btn" to='/login'>Login</Link>
                         
                    }
                    </div>
                </div>


            </nav>
        </div>
    );
};

export default Navigation;