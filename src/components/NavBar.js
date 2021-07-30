import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import Logo from './Logo';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaRegUserCircle} from 'react-icons/fa';

function NavBar({ isAuthenticated, logout }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const authLinks = (
           <Fragment>
                <li className="nav-item lg:mr-auto">
                    <NavLink exact to='/profile'
                        className=" my-2 mx-4 flex items-center text-lg uppercase font-bold leading-snug  hover:opacity-75 text-blue-500">
                            <FaRegUserCircle className="text-4xl mt-1" />
                    </NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink exact to='/add_post'
                        className=" my-2 mx-4 flex items-center text-lg uppercase font-bold leading-snug  hover:opacity-75 text-blue-500">
                         <PrimaryButton text=' إضافة إعلان '/>
    
                    </NavLink>
                </li>
                    <li 
                        className="nav-item my-2 mx-4 flex items-center text-lg center uppercase font-bold leading-snug text-white hover:opacity-75 rounded-2"
                         onClick={logout}>
                      <SecondaryButton text='تسجيل الخروج'/>
                   </li>
            </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li className="nav-item  lg:mr-auto">
                <NavLink exact to='/login'
                    className=" my-2 mx-4 flex items-center text-lg uppercase font-bold leading-snug  hover:opacity-75 text-blue-500"
                   >
                     <PrimaryButton text='تسجيل الدخول '/>

                </NavLink>
            </li>
            <li className="nav-item ">
                <NavLink exact to='/signup'
                    className=" my-2 mx-4 flex items-center text-lg uppercase font-bold leading-snug  hover:opacity-75 text-blue-500">
                  <SecondaryButton text='تسجيل الاشتراك'/>
               </NavLink>
            </li>
        </Fragment>
    );



    return (
        <>
            <nav dir="rtl" lang='ar' className="relative flex flex-wrap items-center  py-3 shadow ">
                <div className="w-full  mx-5 flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between  lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to="/"
                            className="text-sm font-bold leading-relaxed inline-block mt-2 whitespace-nowrap uppercase "
                            href="#pablo"
                        >
                            <Logo />
                        </Link>
                        <button
                            className="text-blue-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <GiHamburgerMenu/>
                         </button>
                    </div>
                    
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:w-full">

                            <li className="nav-item ">
                                <Link to="/informations"
                                    className="mt-3 mx-8 flex items-center text-lg uppercase font-bold leading-snug  hover:opacity-75"
                                    
                                >
                                   <span >تعبئة قارورة</span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/aboutus"
                                    className="mt-3 mx-8 flex items-center text-lg uppercase font-bold leading-snug  hover:opacity-75"
                                    >
                                   <span > تواصل معنا</span>
                                </Link>
                            </li>
                            {<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}

                        </ul>
                    </div>



                </div>
            </nav>
        </>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(NavBar);