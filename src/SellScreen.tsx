import React, { useState } from 'react';

// iOS 스타일 아이콘 대체 (실제 프로젝트에서는 lucide-react, react-native-vector-icons 등 사용)
const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const QuestionCircleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const QuestionFilledIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#D1D5DB"/>
    <path d="M12 16V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.5 12 12 12 13.5V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function SellScreen() {
  const [activeTab, setActiveTab] = useState('판매요청');
  const tabs = ['판매요청', '판매현황', '판매문의'];

  const handleStartSell = () => {
    alert('판매 시작하기');
  };

  const handlePriceCheck = () => {
    alert('시세조회');
  };

  return (
    <div className="flex flex-col h-full bg-[#F7F7F9] text-[#111111] font-sans w-full relative overflow-hidden">
      
      {/* 1. 상단 네비게이션 바 */}
      <header className="flex items-center justify-between px-2 pt-12 pb-2 bg-white z-10">
        <button className="p-2 hit-slop" aria-label="뒤로가기">
          <ChevronLeftIcon />
        </button>
        <span className="text-[17px] font-semibold text-[#111111] absolute left-1/2 -translate-x-1/2">
          판매
        </span>
        <button 
          onClick={handlePriceCheck}
          className="mr-3 px-3 py-[6px] text-[13px] font-medium text-[#555555] border border-[#E5E5EA] rounded-[10px] bg-white active:bg-gray-50 transition-colors"
        >
          시세조회
        </button>
      </header>

      {/* 2. 탭 영역 */}
      <nav className="flex bg-white border-b border-[#E5E5EA] z-10 px-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-center text-[15px] transition-colors relative font-semibold ${
              activeTab === tab ? 'text-[#111111]' : 'text-[#8E8E93]'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#111111] rounded-t-sm" />
            )}
          </button>
        ))}
      </nav>

      {/* 3. 메인 콘텐츠 */}
      <main className="flex-1 overflow-y-auto px-5 pt-7 pb-32 no-scrollbar">
        {/* 헤더 안내 문구 및 우측 캐릭터 (캐릭터는 임시 이미지/이모지로 대체) */}
        <div className="flex justify-between items-start mb-6 w-full">
          <h2 className="text-[21px] font-bold leading-[1.4] text-[#111111] tracking-[-0.3px]">
            안쓰는 쿠폰<br />
            지금 바로 판매해보세요
          </h2>
          <div className="w-[80px] h-[80px] -mt-2 -mr-1 flex items-center justify-center pointer-events-none drop-shadow-sm">
            {/* 실제 에셋 대체 가능 공간 */}
            <span className="text-[60px]">🐹</span>
          </div>
        </div>

        {/* 4. 정보 카드 1 (누적 판매 / 남은 금액) */}
        <div className="bg-white p-5 rounded-[20px] mb-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-white/50">
          <p className="text-[17px] font-bold text-[#111111] mb-[10px] tracking-[-0.3px]">
            지금까지 <span className="text-[#FF8A00]">135,260원</span> 판매완료!
          </p>
          <div className="flex items-center text-[13px] text-[#8E8E93] tracking-[-0.2px]">
            <span>남은 판매 가능 금액 <span className="font-bold text-[#3A3A3C] ml-0.5">220,090원</span></span>
            <span className="ml-[6px] translate-y-[0.5px]">
              <QuestionCircleIcon />
            </span>
          </div>
        </div>

        {/* 5. 정보 카드 2 (정산 안내) */}
        <div className="bg-white px-5 py-[18px] rounded-[18px] mb-8 flex items-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-white/50">
          <p className="text-[15px] font-bold text-[#111111] tracking-[-0.3px]">
            <span className="text-[#FF8A00]">2영업일 후 기프티캐시</span> 로 정산 받아요
          </p>
          <span className="ml-[6px] translate-y-[0.5px]">
            <QuestionCircleIcon />
          </span>
        </div>
      </main>

      {/* 6. 하단 고정 액션 버튼 및 텍스트 (Gradient Background for smooth fade out if needed) */}
      <div className="absolute bottom-0 left-0 right-0 pt-6 pb-8 px-5 bg-[#F7F7F9]">
        <button 
          onClick={handleStartSell}
          className="w-full bg-[#FF9500] hover:bg-[#FF8800] active:bg-[#E07D00] text-white font-bold text-[17px] py-[18px] rounded-[16px] mb-5 shadow-[0_4px_12px_rgba(255,149,0,0.2)] transition-all"
        >
          판매 시작하기
        </button>
        <div className="flex justify-center items-center text-[13px] text-[#8E8E93]">
          <span className="cursor-pointer">판매방법이 궁금해요</span>
          <span className="ml-[5px] cursor-pointer translate-y-[0.5px]">
            <QuestionFilledIcon />
          </span>
        </div>
      </div>
      
    </div>
  );
}
