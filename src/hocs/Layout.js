import React,{useEffect} from 'react'
import NavBar from '../components/NavBar'
import {loadUser} from '../actions/auth'
import {connect} from 'react-redux'
import Footer from '../components/Footer';
import { loadPost } from '../actions/post';

function Layout({children,loadUser,loadPost}) {

    useEffect(() => {
        const fetchData = async () => {
            try {
              loadUser();
              loadPost();
            } catch (err) {

            }
        }

        fetchData();
    }, []);
    return (
        <div >
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default connect(null,{loadUser,loadPost}) (Layout)
