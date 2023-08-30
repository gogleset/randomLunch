/**
 * @gogleset 위치값 검사하는 component
 */

import KakaoModal from "./components/modal/KakaoAddressModal";
import GeoLocationPendingModal from "./components/modal/GeoLocationPendingModal";
const Home = () => {
  return (
    <main className='w-full flex justify-center'>
      <div className='h-screen bg-slate-400 w-1/2 max-md:w-screen flex flex-col justify-center items-center text-black'>
        {/* 로컬스토리지에 위치 값이 있다면 */}
        <div className='bg-slate-100 w-60 h-60 flex flex-col items-center justify-around'>
          <h1 className='font-bold text-xl'>현재 위치를 알려주세요</h1>
          <button
            className='btn btn-info'
            onClick={() => window.geolocationPendingModal.showModal()}>
            현재 위치로 검색
          </button>
          <GeoLocationPendingModal />
          <button
            className='btn btn-primary'
            onClick={() => window.kakaoModal.showModal()}>
            주소값으로 검색
          </button>
          <KakaoModal />
        </div>
        {/* 로컬스토리지에 위치 값이 없다면 */}
      </div>
    </main>
  );
};

export default Home;
