import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {AiOutlinePhone} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import emailjs from 'emailjs-com';



function AboutUs(props) {

  const sendMail=(e)=> {
    e.preventDefault();

    emailjs.sendForm('service_95twc0g', 'template_vymu68f', e.target,'user_OJonQWPjlzQZjKVUQEkib')

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
   }

    return (
    <div className=" h-full text-gray-800 ">
        <div className=" relative bg-about h-80 w-full      bg-cover bg-no-repeat  px-24 md:py-10 ">
          <h1 className="font-bold text-6xl md:text-7xl absolute bottom-10   "> About us  </h1>
        </div>
        <div className="md:flex md:flex-row px-11 bg-main h-full pb-72">
          <div className="md:w-3/6 p-12">
            <h1 className="font-bold text-3xl py-2 ">  Who are we </h1>
            <p className="font-regular"> We are a team made of IT students based in algeria specialized in Web Developing  ,
              Our goal is to exploit all the resources in order to provide the best services to our clients
            assuring good communication and support .</p>
            
            <div className="my-6">
              <h1 className="font-bold text-3xl py-2 " > Contact Informations </h1>
              <a className="block " href="mailto:azazd@yahoo.cim"> <AiOutlineMail className="inline mr-1"/>dzoxygene.website@gmail.com</a>
              <a className="block my-1" display='bloc' href="tel:+213665036036"> <AiOutlinePhone className="inline"/> +213665036036</a>
              <p> <HiOutlineLocationMarker className="inline"/>algeria</p>
            </div>
          </div>
          <form className="md:w-3/6 ml:auto my-6" onSubmit={e=>sendMail(e)}>
            <div className="w-full flex  flex-wrap  mb-6">
              <div className="w-full">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input name="name" id="name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="First name"/>
              </div>

            </div>
            <div className=" w-full flex  flex-wrap  mb-6">
              <div className=" w-full ">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  E-mail
                </label>
                <input name="email" id="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email"/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Message
                </label>
                <textarea name="message" id="message" className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button  className="shadow bg-blue-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
    </div>
    );
}

export default AboutUs;