import React from 'react';

const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
);
const ShoppingBagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>
);
const RefreshIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/></svg>
);
const ChevronRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
);
const HeadsetIcon = () => <span className="text-[34px] filter drop-shadow-sm mb-1">🎧</span>;
const EventIcon = () => <span className="text-[34px] filter drop-shadow-sm mb-1">🎉</span>;
const NoticeIcon = () => <span className="text-[34px] filter drop-shadow-sm mb-1">📢</span>;
const MegaphoneIcon = () => <span className="text-[34px] filter drop-shadow-sm -translate-y-1">📣</span>;

export default function MenuScreen() {
  return (
    <div className="flex flex-col h-full bg-[#F2F2F7] text-[#111111] relative overflow-y-auto no-scrollbar pb-6 w-full">
      {/* Top White Section */}
      <div className="bg-white rounded-b-[24px] pb-5 mb-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] z-10 shrink-0">
        <header className="flex items-center justify-between px-1 pt-12 pb-3 bg-white sticky top-0">
          <button className="p-3"><ChevronLeftIcon /></button>
          <span className="text-[17px] font-semibold absolute left-1/2 -translate-x-1/2">전체 메뉴</span>
          <button className="p-3"><ShoppingBagIcon /></button>
        </header>

        <div className="px-5 pt-3">
          {/* Profile */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-[21px] font-bold">
              Jiyeon <span className="text-[#8E8E93] text-[17px] font-medium tracking-tight">님</span>
            </div>
            <button className="px-[12px] py-[7px] text-[12px] font-medium text-[#555] border border-[#E5E5EA] rounded-[10px] bg-white active:bg-gray-50 transition-colors tracking-tight">
              프로필 설정
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-between items-center text-center">
            <div className="flex flex-col items-center flex-1 cursor-pointer">
              <span className="text-[22px] font-bold tracking-tight">99</span>
              <span className="text-[12px] text-[#8E8E93] mt-[2px] font-medium tracking-tight">구매내역</span>
            </div>
            <div className="flex flex-col items-center flex-1 cursor-pointer">
              <span className="text-[22px] font-bold tracking-tight">43</span>
              <span className="text-[12px] text-[#8E8E93] mt-[2px] font-medium tracking-tight">판매내역</span>
            </div>
            <div className="flex flex-col items-center flex-1 cursor-pointer">
              <span className="text-[22px] font-bold tracking-tight">0</span>
              <span className="text-[12px] text-[#8E8E93] mt-[2px] font-medium tracking-tight">관심상품</span>
            </div>
            <div className="flex flex-col items-center flex-1 cursor-pointer">
              <span className="text-[22px] font-bold tracking-tight">17</span>
              <span className="text-[12px] text-[#8E8E93] mt-[2px] font-medium tracking-tight">신고진행</span>
            </div>
          </div>
        </div>
      </div>

      <main className="px-5 shrink-0">
        {/* 3 Large Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <button className="bg-white py-5 rounded-[18px] flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-white/50 active:bg-gray-50 transition-colors">
            <HeadsetIcon />
            <span className="text-[14px] font-semibold mt-1 tracking-tight">고객센터</span>
          </button>
          <button className="bg-white py-5 rounded-[18px] flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-white/50 active:bg-gray-50 transition-colors">
            <EventIcon />
            <span className="text-[14px] font-semibold mt-1 tracking-tight">이벤트</span>
          </button>
          <button className="bg-white py-5 rounded-[18px] flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-white/50 active:bg-gray-50 transition-colors">
            <NoticeIcon />
            <span className="text-[14px] font-semibold mt-1 tracking-tight">공지사항</span>
          </button>
        </div>

        {/* Banner */}
        <div className="bg-[#E7F0FA] px-4 py-[14px] rounded-[16px] flex items-center mb-5 cursor-pointer active:opacity-80 transition-opacity">
          <MegaphoneIcon />
          <div className="ml-3">
            <div className="text-[12px] text-[#5C89C1] font-bold tracking-tight mb-[2px]">기프티스타에대한</div>
            <div className="text-[15px] font-bold text-[#111111] tracking-tight">주인님의 소중한 의견을 들려주세요</div>
          </div>
        </div>

        {/* Gifticash Section */}
        <div className="bg-white rounded-[20px] p-[22px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-white/50 mb-7">
          <div className="flex justify-between items-center mb-5">
            <span className="text-[14px] font-bold text-[#111111] tracking-tight">적립예정 금액</span>
            <div className="flex items-center text-[#8E8E93]">
              <span className="text-[15px] font-medium mr-[6px]">0원</span>
              <div className="w-[22px] h-[22px] border border-[#E5E5EA] flex items-center justify-center bg-[#F9F9F9] rounded-full text-gray-400">
                <RefreshIcon />
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <button className="flex items-center px-3 py-1.5 border border-[#E5E5EA] rounded-full text-[13px] font-semibold text-[#555] active:bg-gray-50 transition-colors shadow-sm">
              기프티캐시 <span className="ml-1 text-gray-500 translate-y-[0.5px]"><RefreshIcon /></span>
            </button>
            <div className="flex items-center cursor-pointer">
              <span className="text-[22px] font-bold tracking-tight">95,596원</span>
              <span className="ml-1"><ChevronRightIcon /></span>
            </div>
          </div>

          <div className="flex gap-2.5">
            <button className="flex-1 py-[14px] bg-white border border-[#FF8A00] text-[#FF8A00] font-bold text-[15px] rounded-[14px] active:bg-orange-50 transition-colors">충전</button>
            <button className="flex-1 py-[14px] bg-white border border-[#FF8A00] text-[#FF8A00] font-bold text-[15px] rounded-[14px] active:bg-orange-50 transition-colors">출금</button>
          </div>
        </div>

        {/* List Section */}
        <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-white/50 overflow-hidden mb-8">
          <div className="flex justify-between items-center px-[22px] py-5 border-b border-[#F2F2F7] cursor-pointer">
            <span className="text-[16px] font-semibold text-[#111] tracking-tight">할인쿠폰</span>
            <div className="flex items-center">
              <span className="text-[16px] font-bold mr-3 tracking-tight">0장</span>
              <button className="px-[12px] py-[6px] text-[12px] font-semibold border border-[#E5E5EA] rounded-[8px] active:bg-gray-50 transition-colors bg-white">쿠폰 입력</button>
            </div>
          </div>
          <div className="flex justify-between items-center px-[22px] py-6 border-b border-[#F2F2F7] cursor-pointer active:bg-gray-50 transition-colors">
            <span className="text-[16px] font-semibold text-[#111] tracking-tight">기프티캐시 출금 내역</span>
            <ChevronRightIcon />
          </div>
          <div className="flex justify-between items-center px-[22px] py-[18px] border-b border-[#F2F2F7]">
            <div className="flex items-center cursor-pointer">
              <span className="text-[16px] font-semibold text-[#111] mr-1 tracking-tight">원터치 판매</span>
              <span className="text-[#A1A1AA] translate-y-[0.5px]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </span>
            </div>
            {/* Toggle Switch */}
            <div className="w-[50px] h-[30px] bg-[#E5E5EA] rounded-full flex items-center px-[2px] cursor-pointer transition-colors shadow-inner">
              <div className="w-[26px] h-[26px] bg-white rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.2)]"></div>
            </div>
          </div>
          <div className="flex justify-between items-center px-[22px] py-6 cursor-pointer active:bg-gray-50 transition-colors">
            <span className="text-[16px] font-semibold text-[#111] tracking-tight">앱 설정</span>
            <ChevronRightIcon />
          </div>
        </div>
      </main>
    </div>
  );
}
