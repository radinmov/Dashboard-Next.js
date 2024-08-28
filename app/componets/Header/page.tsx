import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <div className="text-xl font-bold">
        <a href="#">code-academy</a>
      </div>
      <div className="flex space-x-4">
        {/* <a href="#"><img src="/icons/icon1.png" alt="icon1" className="w-6 h-6" /></a>
        <a href="#"><img src="/icons/icon2.png" alt="icon2" className="w-6 h-6" /></a>
        <a href="#"><img src="/icons/icon3.png" alt="icon3" className="w-6 h-6" /></a> */}
      </div>
    </header>
  );
};

export default Header;
