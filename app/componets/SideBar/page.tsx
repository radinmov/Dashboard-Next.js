import React from 'react';

const RightSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-200 p-6 shadow-lg">
      <div className="text-center mb-8">
        <img
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt="User Picture"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h3 className="text-lg font-medium">Radin Movahedi</h3>
        <p className="text-gray-600">Student</p>
      </div>
      <ul className="space-y-4">
        <li><a href="#" className="text-black font-bold  hover:text-blue-500">Dashboard</a></li>
        <li><a href="#" className="text-black font-bold  hover:text-blue-500">Courses</a></li>
        <li><a href="#" className="text-black font-bold  hover:text-blue-500">Pay</a></li>
        <li><a href="#" className="text-black font-bold  hover:text-blue-500">Suppoprt</a></li>
        <li><a href="#" className="text-black font-bold  hover:text-blue-500">Notifcations</a></li>
        <li><a href="#" className="text-black font-bold  hover:text-blue-500">Setting</a></li>
        <li><a href="#" className="text-black font-bold  hover:text-blue-500">exit</a></li>
      </ul>
    </aside>
  );
};

export default RightSidebar;
