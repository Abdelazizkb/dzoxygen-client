import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';
import Logo from '../components/Logo';

const Activate = (props) => {
    const [verified, setVerified] = useState(false);

    const verify_account = e => {
        const uid = props.match.params.uid;
        const token = props.match.params.token;

        props.verify(uid, token);
        setVerified(true);
    };

    if (verified)
        return <Redirect to='/' />
    return (
    <div className="w-full flex justify-center my-72 ">
        <div className='w-80  flex flex-col items-center justify-center bg-white shadow-lg rounded-md'>
                <div className="m-4">
                  <Logo />
                </div>
                <h1 className="my-2">يرجى منكم تأكيد حسابكم</h1>
                <button 
                    onClick={verify_account}
                    type="button"
                    className="btn btn-primary my-2"
                >
                    تأكيد
                </button>
        </div>
    </div>

    );
};

export default connect(null, { verify })(Activate);