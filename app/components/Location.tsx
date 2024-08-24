import React from 'react';

const Location = () => {
  return (
    <section id="location" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-12">Our Location</h2>
        <div className="flex justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4129330350174!2d78.4774588!3d17.3919599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d78509654b%3A0xc9e471ac8f85de74!2sAhuja%20Estate%2C%20Parsi%20Ln%2C%20Bogulkunta%2C%20Hyderguda%2C%20Hyderabad%2C%20Telangana%20500001!5e0!3m2!1sen!2sin!4v1724429653804!5m2!1sen!2sin" width="800" height="600"  loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
