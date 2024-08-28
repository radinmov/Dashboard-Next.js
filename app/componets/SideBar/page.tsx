import React from 'react';

const RightSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-200 p-6 shadow-lg">
      <div className="text-center mb-8">
        <img
          src="/profile-pic.png"
          alt="User Picture"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h3 className="text-lg font-medium">رادین موحدی</h3>
        <p className="text-gray-600">دانشجو</p>
      </div>
      <ul className="space-y-4">
        <li><a href="#" className="text-gray-800 text-right hover:text-blue-500">داشبورد</a></li>
        <li><a href="#" className="text-gray-800 text-right hover:text-blue-500">دوره‌ها</a></li>
        <li><a href="#" className="text-gray-800 text-right hover:text-blue-500">مالی</a></li>
        <li><a href="#" className="text-gray-800 text-right hover:text-blue-500">پشتیبانی</a></li>
        <li><a href="#" className="text-gray-800 text-right hover:text-blue-500">اعلان‌ها</a></li>
        <li><a href="#" className="text-gray-800 text-right hover:text-blue-500">تنظیمات</a></li>
        <li><a href="#" className="text-gray-800 text-right hover:text-blue-500">خروج</a></li>
      </ul>
    </aside>
  );
};

export default RightSidebar;
