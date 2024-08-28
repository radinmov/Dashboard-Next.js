import React from 'react';
import Header from './componets/Header/page';
import RightSidebar from './componets/SideBar/page';


const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="flex-1 p-6 bg-white">
          {/* Main content goes here */}
        </div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default Home;
