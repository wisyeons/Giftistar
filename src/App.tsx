import React, { useState } from 'react';
import SellScreen from './SellScreen';
import MenuScreen from './MenuScreen';
import CouponScreen from './CouponScreen';
import BottomNav from './BottomNav';

function App() {
  const [activeTab, setActiveTab] = useState('sell');

  return (
    <div className="flex flex-col h-[100dvh] bg-white font-sans w-full max-w-[400px] mx-auto relative overflow-hidden shadow-2xl">
      <div className="flex-1 overflow-hidden relative">
        {activeTab === 'sell' && <SellScreen />}
        {activeTab === 'menu' && <MenuScreen />}
        {activeTab === 'coupon' && <CouponScreen />}
        {['home', 'search'].includes(activeTab) && (
          <div className="flex items-center justify-center h-full bg-[#F5F5F7]">
            <span className="text-gray-400 font-medium text-[15px]">화면 준비중 ({activeTab})</span>
          </div>
        )}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
