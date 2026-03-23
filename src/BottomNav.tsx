import React from 'react';

const HomeIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "#FF8A00" : "none"} stroke={active ? "#FF8A00" : "#A1A1AA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const CouponIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "#FF8A00" : "none"} stroke={active ? "#FF8A00" : "#A1A1AA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="14" rx="2" ry="2"></rect>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <path d="M8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2"></path>
  </svg>
);

const SellIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "#FF8A00" : "#A1A1AA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="8 12 11 9 14 12 17 9"></polyline>
    <polyline points="17 15 17 9 11 9"></polyline>
  </svg>
);

const SearchIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "#FF8A00" : "#A1A1AA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const MenuIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "#FF8A00" : "#A1A1AA"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
);

export default function BottomNav({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) {
  const tabs = [
    { id: 'home', label: '홈', icon: HomeIcon },
    { id: 'coupon', label: '내 쿠폰함', icon: CouponIcon },
    { id: 'sell', label: '판매', icon: SellIcon, badge: '1' },
    { id: 'search', label: '검색', icon: SearchIcon },
    { id: 'menu', label: '전체메뉴', icon: MenuIcon },
  ];

  return (
    <nav className="bg-white border-t border-[#E5E5EA] flex justify-between px-2 pt-2 pb-7 z-50 shrink-0 shadow-[0_-2px_10px_rgba(0,0,0,0.02)] w-full">
      {tabs.map(tab => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        return (
          <button 
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center flex-1 py-1 ${isActive ? 'text-[#FF8A00]' : 'text-[#8E8E93]'}`}
          >
            <div className="relative mb-[4px]">
              <Icon active={isActive} />
              {tab.badge && (
                <div className="absolute -top-1.5 -right-2 min-w-[16px] h-[16px] rounded-full bg-[#FF3B30] text-white text-[10px] font-bold flex items-center justify-center px-[4px] border-[1.5px] border-white z-10">
                  {tab.badge}
                </div>
              )}
            </div>
            <span className="text-[10px] font-semibold tracking-tight">{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
