import React from "react";
import {SiGmail} from 'react-icons/si'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Connectivity meets creativity</p>
      
<br/> 
<br/> 
<br/> 
    <a href="mailto:ayushrajpandey1198@gmail.com" className="flex flex-row p-4 items-center max-w-screen-lg mx-auto bg-gray-900 "><SiGmail size={30}/>&nbsp; ayushrajpandey1198@gmail.com</a>
     
      
      </div>
    </div>
  );
};

export default Contact;
