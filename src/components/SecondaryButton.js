import React from 'react';

function SecondaryButton(props) {
    return (
        <button className=" m-auto sm:min-w-40 p-2 sm:h-11  bg-white border-primary hover:opacity-100 text-primary font-semibold border-1  ">
             {props.text}
        </button>
    );
}

export default SecondaryButton;