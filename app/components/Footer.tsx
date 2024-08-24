import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#C0B6A5]  text-white py-8">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
      <div className="col-span-1 lg:col-span-2">
        <div className="flex items-center space-x-3">
        <img src="/images/logo.png" alt="Logo" className="h-[150px]" />
        </div>
        <p className="mt-4 text-white text-lg">Our Creations are not just Jewellery,they are innovations in elegance designed to dazzle for generations</p>
      </div>
      <div>
        <ul>
        <li className='py-4'><a href='#carousel' className="font-semibold text-lg">Home</a></li>
        <li className='py-4'><a href='#about' className="font-semibold text-lg">About</a></li>
        <li className='py-4'><a href='#jewellery' className="font-semibold text-lg">Jewelry</a></li>
        <li className='py-4'><a href='#craftmanship' className="font-semibold text-lg">Craftsmanship</a></li>
        <li className='py-4'><a href='#conatct' className="font-semibold text-lg">Contact</a></li>
        </ul>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <h3 className="font-semibold text-lg">Get in Touch</h3>
        <p className="mt-4 py-4">
          <strong >Phone:</strong> +91 81791 11730 <br></br><br></br>
          <strong>Address:</strong> Ahuja Estate
Parsi Ln, Bogulkunta, Hyderguda, Hyderabad, Telangana 500001
        </p>
      </div>
    </div>
  </div>

  <div className="mt-8 border-t border-[#96937D] pt-6 text-gray-500 text-center">
    <p>©2024 Shreeji Jewllery. All rights reserved.</p>
  </div>
</footer>   

  )
}

export default Footer;