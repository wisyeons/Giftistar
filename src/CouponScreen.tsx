import React, { useState } from 'react';

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const MagicWandIcon = () => <span className="text-[20px] drop-shadow-sm mr-2 text-[#FF8A00]">✨</span>;
const LargeMagicWandIcon = () => <span className="text-[40px] drop-shadow-sm">✨</span>;

const PhotoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF8A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
);

type Coupon = {
  id: string;
  brand: string;
  name: string;
  price: number;
  originalPrice: number;
  buyDate: string;
  useDate?: string;
  expireDate?: string;
  status: '사용가능' | '사용완료';
  dDay?: number;
  emoji: string;
  bgColor?: string;
};

const USED_COUPONS: Coupon[] = [
  { id: 'u1', brand: '배달의민족', name: '2만원권 (선물코드)', price: 19800, originalPrice: 20000, buyDate: '2026-03-17 11:15', useDate: '26-03-17 11:32', status: '사용완료', emoji: '🍽️', bgColor: '#2AC1BC' },
  { id: 'u2', brand: '배달의민족', name: '2만원권 (선물코드)', price: 19800, originalPrice: 20000, buyDate: '2026-03-11 18:13', useDate: '26-03-23 12:10', status: '사용완료', emoji: '🍽️', bgColor: '#2AC1BC' },
  { id: 'u3', brand: '배달의민족', name: '2만원권 (선물코드)', price: 19800, originalPrice: 20000, buyDate: '2026-03-05 00:13', useDate: '26-03-06 00:17', status: '사용완료', emoji: '🍽️', bgColor: '#2AC1BC' },
  { id: 'u4', brand: '배달의민족', name: '1만원권 (선물코드)', price: 9900, originalPrice: 10000, buyDate: '2026-03-04 18:48', useDate: '26-03-06 00:16', status: '사용완료', emoji: '🍽️', bgColor: '#2AC1BC' }
];

const AVAILABLE_COUPONS: Coupon[] = [
  { id: 'a1', brand: 'GS25', name: '크라운)새콤달콤(포도)500', price: 320, originalPrice: 500, buyDate: '2025-07-02 15:07', expireDate: '26-05-23 까지', status: '사용가능', dDay: 61, emoji: '🍇', bgColor: '#E6E6FA' },
  { id: 'a2', brand: '투썸플레이스', name: '떠먹는 아박', price: 6350, originalPrice: 6800, buyDate: '2025-06-08 14:00', expireDate: '26-06-04 까지', status: '사용가능', dDay: 73, emoji: '🍰', bgColor: '#F2F2F7' },
  { id: 'a3', brand: '투썸플레이스', name: '떠먹는 스트로베리 초콜릿 생크림', price: 6800, originalPrice: 7200, buyDate: '2025-05-17 15:10', expireDate: '26-03-26 까지', status: '사용가능', dDay: 3, emoji: '🍓', bgColor: '#F2F2F7' },
  { id: 'a4', brand: '스타벅스', name: '[e-Gift Item] 콜드 브루 T (앱 사용 불가)', price: 4800, originalPrice: 4900, buyDate: '2024-05-07 18:35', expireDate: '26-05-24 까지', status: '사용가능', dDay: 1123, emoji: '☕', bgColor: '#F2F2F7' }
];

const SCANNED_COUPONS: Coupon[] = [
  { id: 's1', brand: '스타벅스', name: '아이스 카페 아메리카노 T', price: 4500, originalPrice: 4500, buyDate: '2026-03-23 09:12', expireDate: '26-06-23 까지', status: '사용가능', dDay: 93, emoji: '☕', bgColor: '#E8F5E9' },
  { id: 's2', brand: '교촌치킨', name: '허니콤보+웨지감자세트', price: 26000, originalPrice: 26000, buyDate: '2026-03-20 18:30', expireDate: '26-04-20 까지', status: '사용가능', dDay: 28, emoji: '🍗', bgColor: '#FFF8E1' },
  { id: 's3', brand: 'BHC', name: '뿌링클+콜라 1.25L', price: 21000, originalPrice: 21000, buyDate: '2026-03-22 19:15', expireDate: '26-03-28 까지', status: '사용가능', dDay: 5, emoji: '🍕', bgColor: '#FFF0F5' },
];

export default function CouponScreen() {
  // 최상위 탭: 구매함 vs 관리함
  const [activeTopTab, setActiveTopTab] = useState<'구매함' | '관리함'>('구매함');
  // 구매함 내 서브 탭
  const [activeSubTab, setActiveSubTab] = useState<'전체' | '보유' | '사용/만료'>('전체');
  
  // 기능용 데이터 State 
  const [availableCoupons, setAvailableCoupons] = useState<Coupon[]>(AVAILABLE_COUPONS);
  const [usedCoupons, setUsedCoupons] = useState<Coupon[]>(USED_COUPONS);
  const [scannedCoupons, setScannedCoupons] = useState<Coupon[]>([]);

  // 갤러리 자동 스캔 흐름 State
  const [hasScanned, setHasScanned] = useState(false);
  const [isGallerySyncOpen, setIsGallerySyncOpen] = useState(false);
  const [modalStage, setModalStage] = useState<'permission' | 'scanning' | 'complete'>('permission');

  // 상세 보기 모달 State
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

  const subTabs = ['전체', '보유', '사용/만료'] as const;

  // 디스플레이 데이터 (구매함 용)
  let displayCoupons: Coupon[] = [];
  if (activeSubTab === '전체') {
    displayCoupons = [...availableCoupons, ...usedCoupons];
  } else if (activeSubTab === '보유') {
    displayCoupons = availableCoupons;
  } else if (activeSubTab === '사용/만료') {
    displayCoupons = usedCoupons;
  }

  const handleStartScan = () => {
    setModalStage('permission');
    setIsGallerySyncOpen(true);
  };

  const handlePermissionAllow = () => {
    setModalStage('scanning');
    setTimeout(() => setModalStage('complete'), 2000);
  };

  const handleAddScannedCoupons = () => {
    setAvailableCoupons(prev => [...SCANNED_COUPONS, ...prev]);
    setScannedCoupons([...SCANNED_COUPONS]);
    setHasScanned(true);
    setIsGallerySyncOpen(false);
  };

  const handleUseCoupon = () => {
    if (!selectedCoupon) return;
    alert('쿠폰을 사용했습니다!');
    const updated = { ...selectedCoupon, status: '사용완료', useDate: '26-03-23 13:45' } as Coupon;
    setAvailableCoupons(prev => prev.filter(c => c.id !== selectedCoupon.id));
    setUsedCoupons(prev => [updated, ...prev]);
    setSelectedCoupon(null);
  };

  // 렌더링 헬퍼
  const renderCouponItem = (c: Coupon) => (
    <div 
      key={c.id} 
      onClick={() => setSelectedCoupon(c)}
      className="flex px-[18px] py-[22px] border-b border-[#F2F2F7] cursor-pointer active:bg-gray-50 transition-colors"
    >
      <div className="w-[96px] h-[64px] rounded-[6px] flex items-center justify-center shrink-0 mr-4 shadow-sm border border-black/5" style={{ backgroundColor: c.bgColor || '#F2F2F7' }}>
        <span className="text-[32px]">{c.emoji}</span>
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[12.5px] text-[#8E8E93] font-medium tracking-tight mb-[2px]">{c.brand}</span>
          <span className={`text-[12.5px] font-bold tracking-tight ${c.status === '사용가능' ? 'text-[#FF8A00]' : 'text-[#D1D5DB]'}`}>{c.status}</span>
        </div>
        <div className="text-[16px] font-bold text-[#111111] mb-[2px] line-clamp-1 tracking-tight leading-snug">{c.name}</div>
        <div className="mb-[6px] flex items-baseline">
          <span className="text-[15px] font-bold text-[#111111] tracking-tight">{c.price.toLocaleString()}원</span>
          <span className="text-[13px] text-[#A1A1AA] line-through ml-[4px] tracking-tight font-medium">{c.originalPrice.toLocaleString()}원</span>
        </div>
        <div className="text-[12px] text-[#A1A1AA] font-medium tracking-tight mt-[1px]">구매일시 {c.buyDate}</div>
        <div className="text-[12px] text-[#A1A1AA] font-medium mt-[1px] tracking-tight flex items-center">
          {c.useDate ? `사용일시 ${c.useDate}` : `만료일 ${c.expireDate}`}
          {c.dDay !== undefined && (
            <span className={`px-[7px] py-[2px] rounded-[4px] ml-[8px] font-bold text-[10px] tracking-tight ${c.dDay <= 10 ? 'bg-red-100 text-red-600' : 'bg-[#FFF0E6] text-[#FF8A00]'}`}>
              D-{c.dDay}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-white text-[#111111] w-full relative">
      
      {/* 고정 헤더: 내 쿠폰함 타이틀 & 구매함/관리함 탭 */}
      <div className="flex-none bg-white z-10 shrink-0">
        <div className="pt-12 pb-[14px] text-center text-[18px] font-bold tracking-tight">내 쿠폰함</div>
        
        {/* 상단 탭: 구매함 vs 관리함 */}
        <div className="flex border-b border-[#E5E5EA] px-[6px]">
          <button 
            onClick={() => setActiveTopTab('구매함')}
            className={`flex-1 py-[15px] text-center text-[17px] relative transition-colors ${
              activeTopTab === '구매함' ? 'text-[#FF8A00] font-bold' : 'text-[#8E8E93] font-medium'
            }`}
          >
            <span className="tracking-tight">구매함</span>
            {activeTopTab === '구매함' && <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#FF8A00]" />}
          </button>
          
          <button 
            onClick={() => setActiveTopTab('관리함')}
            className={`flex-1 py-[15px] flex items-center justify-center text-[17px] relative transition-colors ${
              activeTopTab === '관리함' ? 'font-bold' : 'text-[#8E8E93] font-medium'
            }`}
          >
            <span className="tracking-tight">관리함</span>
            <span className={`ml-2 px-1.5 py-[3px] rounded-[6px] text-[11px] font-bold text-white bg-[#FF8A00] tracking-widest translate-y-[-1px]`}>
              베타
            </span>
            {activeTopTab === '관리함' && <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#FF8A00]" />}
          </button>
        </div>

        {/* 구매함 액티브 시 -> 2차 서브 탭 및 검색 */}
        {activeTopTab === '구매함' && (
          <div className="bg-white">
            <div className="px-[18px] pt-[14px] pb-2">
              <div className="bg-[#F5F5F7] h-[46px] rounded-[10px] flex items-center px-4 cursor-pointer">
                <SearchIcon />
                <span className="text-[14.5px] text-[#A1A1AA] ml-2 font-medium tracking-tight mt-[1px]">상품명이나 바코드 번호로 검색해보세요</span>
              </div>
            </div>
            <div className="flex border-b border-[#E5E5EA] px-2 mt-1">
              {subTabs.map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setActiveSubTab(tab)}
                  className={`flex-1 py-[13px] text-center text-[14.5px] relative transition-colors ${
                    activeSubTab === tab ? 'text-[#FF8A00] font-bold' : 'text-[#8E8E93] font-medium'
                  }`}
                >
                  <span className="tracking-tight">{tab}</span>
                  {activeSubTab === tab && <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#FF8A00]" />}
                </button>
              ))}
            </div>
            
            <div className="flex justify-between items-center px-[20px] py-[15px] bg-[#F9F9F9] border-b border-[#E5E5EA]">
              <div className="text-[14px] text-[#111] tracking-tight">총 <span className="font-bold">{displayCoupons.length}</span> 개</div>
              <div className="flex items-center text-[13.5px] text-[#555] font-medium cursor-pointer tracking-tight">신규 등록순 <ChevronDownIcon /></div>
            </div>
          </div>
        )}
      </div>

      {/* 2. 메인 스크롤 영역 */}
      {activeTopTab === '구매함' ? (
        <div className="flex-1 overflow-y-auto no-scrollbar pb-[100px] bg-white">
          {displayCoupons.map(renderCouponItem)}
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto no-scrollbar pb-[100px] bg-white relative">
          {!hasScanned ? (
            /* 스캔 전: 기능 연동 대시보드 */
            <div className="flex flex-col items-center justify-center h-full px-6 text-center -mt-10 min-h-[440px]">
              <div className="w-[88px] h-[88px] bg-gradient-to-tr from-[#FFF4EB] to-[#FFF0E6] rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#FF8A00]/15">
                <LargeMagicWandIcon />
              </div>
              <h3 className="text-[22px] font-bold text-[#111111] mb-[12px] tracking-tight leading-snug">
                갤러리 속 숨은 쿠폰 찾기
              </h3>
              <p className="text-[15px] text-[#8E8E93] mb-[36px] font-medium leading-[1.6] tracking-tight break-keep">
                여기저기 흩어진 쿠폰 이미지를 자동으로 찾아내어<br/>브랜드별로 편하게 관리해 드려요.
              </p>
              <button 
                onClick={handleStartScan}
                className="bg-[#FF8A00] text-white px-8 py-[18px] rounded-[16px] font-bold text-[17px] w-full max-w-[280px] active:bg-[#E57800] transition-colors shadow-[0_4px_16px_rgba(255,138,0,0.25)]"
              >
                기능 연동 시작하기
              </button>
            </div>
          ) : (
            /* 스캔 후: 찾은 쿠폰 결과 리포트 */
            <div className="pb-8 bg-[#F9F9F9] min-h-full">
              <div className="px-[22px] pt-[36px] pb-[28px] bg-white rounded-b-[24px] shadow-sm mb-4">
                <div className="inline-block bg-[#FFF0E6] text-[#FF8A00] px-3 py-1 rounded-full font-bold text-[12px] mb-3 tracking-tight">
                  방금 연동 성공
                </div>
                <h3 className="text-[23px] font-bold text-[#111] mb-2 leading-[1.4] tracking-tight">
                  새로 발견한 쿠폰이<br/><span className="text-[#FF8A00]">{scannedCoupons.length}장</span> 찾아왔어요!
                </h3>
                <p className="text-[14.5px] text-[#8E8E93] font-medium tracking-tight mt-3">아래 쿠폰들은 통합되어 자동 관리됩니다.</p>
              </div>
              
              <div className="bg-white rounded-xl mx-4 shadow-sm border border-gray-100 overflow-hidden mb-8">
                {scannedCoupons.map(renderCouponItem)}
              </div>

              <div className="px-5">
                <button 
                  onClick={() => setActiveTopTab('구매함')}
                  className="w-full bg-[#E5E5EA] text-[#111] font-bold text-[16px] py-[16px] rounded-[16px] active:bg-gray-300 transition-colors shadow-sm"
                >
                  보유 탭에서 이어서 보기
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. 모달: 갤러리 자동 스캔 프로세스 */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isGallerySyncOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={() => modalStage === 'permission' && setIsGallerySyncOpen(false)} />
        
        {/* 중앙 모달 */}
        <div className={`absolute inset-x-8 top-1/2 -translate-y-1/2 bg-white rounded-[24px] p-8 shadow-2xl flex flex-col items-center text-center transition-transform duration-300 ${isGallerySyncOpen ? 'scale-100' : 'scale-95'}`}>
          {modalStage === 'permission' && (
            <>
              <div className="w-[68px] h-[68px] bg-[#FFF4EB] rounded-full flex items-center justify-center mb-6">
                <PhotoIcon />
              </div>
              <h3 className="text-[21px] font-bold text-[#111111] mb-2 tracking-tight leading-snug">
                갤러리 접근 권한 허용
              </h3>
              <p className="text-[14px] text-[#8E8E93] font-medium tracking-tight mb-8 leading-snug">
                쿠폰 이미지를 자동으로 찾아드리기 위해<br/>갤러리의 접근 권한이 필요합니다.
              </p>
              <div className="bg-[#F5F5F7] p-[18px] text-left w-full rounded-[16px] mb-[28px]">
                <p className="text-[12.5px] text-[#555] leading-[1.6] break-keep tracking-tight">
                  <strong className="text-[#FF8A00] font-bold">쿠폰 이미지만 인식</strong>하며, 다른 일반 사진은 수집하지 않습니다. 동의 후 환경설정에서 철회할 수 있습니다.
                </p>
              </div>
              <div className="flex gap-2.5 w-full">
                <button onClick={() => setIsGallerySyncOpen(false)} className="flex-1 py-[15px] bg-[#F2F2F7] text-[#555] font-bold text-[15px] rounded-[16px] active:bg-[#E5E5EA] transition-colors">
                  취소
                </button>
                <button onClick={handlePermissionAllow} className="flex-1 py-[15px] bg-[#FF8A00] text-white font-bold text-[15px] rounded-[16px] active:bg-[#E57800] transition-colors">
                  허용하기
                </button>
              </div>
            </>
          )}

          {modalStage === 'scanning' && (
            <div className="py-10 flex flex-col items-center">
               <div className="w-[60px] h-[60px] border-4 border-[#FF8A00]/20 border-t-[#FF8A00] rounded-full animate-spin mb-8" />
               <h3 className="text-[21px] font-bold text-[#111111] mb-3 tracking-tight">
                 갤러리에서 쿠폰을<br/>가져오고 있습니다...
               </h3>
               <p className="text-[14px] text-[#8E8E93] font-medium tracking-tight">
                 바코드가 포함된 이미지를 분류 중입니다.
               </p>
            </div>
          )}

          {modalStage === 'complete' && (
            <>
              <div className="w-[80px] h-[80px] bg-[#EFF9F1] rounded-full flex items-center justify-center mb-6 shadow-sm">
                <span className="text-[44px]">🎉</span>
              </div>
              <h3 className="text-[22px] font-bold text-[#111111] mb-2 tracking-tight">
                새로운 쿠폰 <span className="text-[#FF8A00]">{SCANNED_COUPONS.length}장</span> 발견!
              </h3>
              <p className="text-[14.5px] text-[#8E8E93] mb-8 font-medium tracking-tight">
                브랜드별로 깔끔하게 정리해두었어요.
              </p>
              <button 
                onClick={handleAddScannedCoupons}
                className="w-full bg-[#FF8A00] text-white font-bold text-[16px] py-[18px] rounded-[16px] active:bg-[#E57800] transition-colors shadow-[0_4px_16px_rgba(255,138,0,0.25)]"
              >
                관리 대시보드 리포트 생성
              </button>
            </>
          )}
        </div>
      </div>

      {/* 4. 모달: 쿠폰 상세 정보 컴포넌트 */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${selectedCoupon ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={() => setSelectedCoupon(null)} />
        
        <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[28px] px-6 pt-5 pb-[40px] shadow-2xl transition-transform duration-300 flex flex-col max-h-[90vh] ${selectedCoupon ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="w-12 h-[5px] bg-[#E5E5EA] rounded-full mx-auto mb-7 shrink-0" />

          {selectedCoupon && (
            <div className="overflow-y-auto no-scrollbar pb-2">
              <div className="flex items-center mb-7 w-full">
                <div className="w-[72px] h-[72px] rounded-[16px] flex items-center justify-center shadow-sm border border-black/5 shrink-0" style={{ backgroundColor: selectedCoupon.bgColor || '#F2F2F7'}}>
                  <span className="text-[34px]">{selectedCoupon.emoji}</span>
                </div>
                <div className="ml-5 flex-1 pr-2 min-w-0">
                  <div className="text-[14px] text-[#8E8E93] font-medium mb-1 tracking-tight">{selectedCoupon.brand}</div>
                  <div className="text-[19px] font-bold text-[#111] leading-snug tracking-tight line-clamp-2">{selectedCoupon.name}</div>
                  {selectedCoupon.status === '사용가능' && selectedCoupon.dDay !== undefined && (
                    <div className="inline-block mt-[6px] bg-[#FFF0E6] text-[#FF8A00] px-2.5 py-1 rounded-[6px] font-bold text-[12px] tracking-tight">
                      만료까지 단 D-{selectedCoupon.dDay}일 남았어요!
                    </div>
                  )}
                </div>
              </div>

              {selectedCoupon.status === '사용가능' && (
                <div className="w-full bg-[#F9F9F9] rounded-[20px] p-6 flex flex-col items-center justify-center mb-7 border border-[#E5E5EA]">
                  <div className="w-full h-[64px] flex gap-[3px] justify-center items-center opacity-80 mb-4 overflow-hidden px-4 mix-blend-multiply filter blur-[0.5px]">
                    {[2,1,3,1,2,1.5,4,1,2,1,3,1,2,2.5,1,1.5,2].map((w, i) => (
                      <div key={i} className="h-full bg-black opacity-90 rounded-[1px]" style={{ width: `${w * 4}px` }} />
                    ))}
                  </div>
                  <div className="text-[#8E8E93] text-[16px] font-mono tracking-[0.2em] font-medium">
                    1234 5678 9012
                  </div>
                </div>
              )}

              <div className="bg-[#F5F5F7] rounded-[16px] p-5 mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[13.5px] text-[#8E8E93] font-medium tracking-tight">쿠폰 상태</span>
                  <span className={`text-[13.5px] font-bold tracking-tight ${selectedCoupon.status === '사용가능' ? 'text-[#FF8A00]' : 'text-[#8E8E93]'}`}>{selectedCoupon.status}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[13.5px] text-[#8E8E93] font-medium tracking-tight">유효 기간</span>
                  <span className="text-[13.5px] text-[#111] font-bold tracking-tight">{selectedCoupon.useDate || selectedCoupon.expireDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13.5px] text-[#8E8E93] font-medium tracking-tight">구매 일시</span>
                  <span className="text-[13.5px] text-[#111] font-bold tracking-tight">{selectedCoupon.buyDate}</span>
                </div>
              </div>

              {selectedCoupon.status === '사용가능' ? (
                <div className="flex gap-3">
                  <button 
                    onClick={() => {
                        alert('판매 등록 흐름으로 이어집니다.');
                        setSelectedCoupon(null);
                    }}
                    className="flex-1 py-[16px] bg-[#FFF0E6] text-[#FF8A00] font-bold text-[16px] rounded-[16px] active:bg-[#FFE5D1] transition-colors"
                  >
                    판매하기
                  </button>
                  <button 
                    onClick={handleUseCoupon}
                    className="flex-1 py-[16px] bg-[#FF8A00] text-white font-bold text-[16px] rounded-[16px] active:bg-[#E57800] transition-colors shadow-[0_4px_12px_rgba(255,138,0,0.2)]"
                  >
                    바코드 사용
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setSelectedCoupon(null)}
                  className="w-full py-[16px] bg-[#F2F2F7] text-[#555] font-bold text-[16px] rounded-[16px] active:bg-[#E5E5EA] transition-colors"
                >
                  닫기
                </button>
              )}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
