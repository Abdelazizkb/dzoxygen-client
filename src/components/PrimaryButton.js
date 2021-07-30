import React from 'react';

function PrimaryButton(props) {
    return (
        <button className="  sm:w-40 p-2 sm:h-11 text-white  hover:opacity-75  bg-primary   font-semibold	">
          {props.text} 
        </button>
    );
}

export default PrimaryButton;