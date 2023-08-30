/**
 * @gogleset 사용자가 처음 입장 시 localstorage에 현재 위치값이 없을때 나타나는 컴포넌트
 */
import React from "react";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { loadAddressAtom } from "../store/LocationAtom";

import KakaoModal from "./modal/KakaoAddressModal";
import CurrentGeolocationModal from "./modal/CurrentGeolocationModal";
const Information = () => {
  // 현재 Location을 가져올 수 있는지 트리거할 수 있는지 판별하는 trigger state
  const [currentLocationTrigger, setCurrentLocatioTrigger] = useState(false);
  const [isGetData, setIsGetData] = useState(false);

  // 현재 도로명주소
  const [loadAddress, setLoadAddress] = useAtom(loadAddressAtom);

  // 현재 위치를 받아올 때 쓸 수 있는 함수
  function currentLocationClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    setCurrentLocatioTrigger(true);
    window.currentModal.showModal();
  }

  useEffect(() => {
    if (loadAddress) {
      setIsGetData(true);
    } else if (!loadAddress) {
      setIsGetData(false);
    }
  }, [loadAddress]);
  console.log(isGetData, loadAddress);
  return (
    <div className=' w-60 h-60 flex flex-col items-center justify-around'>
      {/* {!isGetData && (
        <>
          <h1 className='font-bold text-xl'>현재 위치를 알려주세요</h1>

          <button
            className='btn btn-info'
            onClick={currentLocationClickHandler}>
            현재 위치로 검색
          </button>
        </>
      )} */}
      <CurrentGeolocationModal trigger={currentLocationTrigger} />

      <button
        className='btn btn-primary'
        onClick={() => window.kakaoModal.showModal()}>
        주소값으로 검색
      </button>
      <KakaoModal />
    </div>
  );
};

export default Information;
