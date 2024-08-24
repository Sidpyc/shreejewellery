'use client';
import React, { useState } from 'react';

const Contactus: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formEle = e.currentTarget;
    const formData = new FormData(formEle);

    fetch("https://script.google.com/macros/s/AKfycbxynZXtWw-JmrUr1E3LcK3scHizMdNQBbC7p_w9ntwMFT27N6ACYBZjI0FyzB2xqIRKmg/exec", {
      method: 'POST',
      body: formData
    })
    .then((res) => {
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return res.json();
      } else {
        return res.text();
      }
    })
    .then((data) => {
      if (typeof data === 'string') {
        console.log(data);
      } else {
        console.log(data);
      }
      setShowMessage(true);
      formEle.reset(); // Clear form fields after successful submission
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div id='connect' className="min-h-screen flex items-center justify-center bg-[#C0B6A5] p-5">
      <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-6 hidden md:block">
        <img
          src="./images/side_img.png"
          width={500}
          alt="Profile"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="md:w-1/2 w-full">
        <h2 className="text-4xl font-extrabold mb-6 text-white text-center md:text-left">
          Say Hello to Us
        </h2>
        
        <form className='form' onSubmit={submit}>
          <div className="mb-4">
            <input 
              type="text" 
              id="Name" 
              name="Name" 
              placeholder="Name" 
              className="w-full p-3 rounded-lg border border-white bg-transparent text-white text-2xl  placeholder-white focus:outline-none focus:ring-2 focus:ring-[#3E3F1F]"
              required 
            />
          </div>

          <div className="mb-4">
            <input 
              type="email" 
              id="Email" 
              name="Email" 
              placeholder="Your Email" 
              className="w-full p-3 rounded-lg border border-white bg-transparent text-white text-2xl placeholder-white focus:outline-none focus:ring-2 focus:ring-[#3E3F1F]"
              required 
            />
          </div>

          <div className="mb-4">
            <input 
              type="tel" 
              id="PhoneNumber" 
              name="PhoneNumber" 
              placeholder="Phone number" 
              className="w-full p-3 rounded-lg border border-white bg-transparent text-white text-2xl placeholder-white focus:outline-none focus:ring-2 focus:ring-[#3E3F1F]"
              required 
            />
          </div>

          <div className="mb-6">
            <textarea 
              id="Message" 
              name="Message" 
              placeholder="Message" 
              className="w-full p-3 rounded-lg border border-white bg-transparent text-white text-2xl placeholder-white focus:outline-none focus:ring-2 focus:ring-[#3E3F1F]"
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-black text-white font-semibold p-3 rounded-lg hover:opacity-90 transition duration-300">
            Send
          </button>
          {showMessage && (
            <div className="mt-4 text-white text-2xl text-center">
              We Got your message! Thank You!
            </div>
          )}
          <div className="flex flex-col items-center mt-6">
            <img
              src="./images/qr.png"
              alt="WhatsApp QR Code"
              className="w-32 h-32"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
