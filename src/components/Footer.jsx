import React from 'react';

const date = new Date();
const y = date.getFullYear();
const Footer = () => (
  <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © {y} All rights reserved by Kompass.com
    </p>
  </div>
);

export default Footer;
