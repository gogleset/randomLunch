/**
 * @gogleset GeoLocation API를 이용한 위치 추출 및 모달 컴포넌트
 */
import React, { useEffect, useState } from "react";
import { getCurrentLocation } from "../../util/geolocation";

const CurrentGeolocationModal = ({ trigger }: { trigger: boolean }) => {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  // 현재 위치 가져올 시 로딩 state
  useEffect(() => {
    // trigger === true
    if (trigger) {
      // 현재위치 가져오고
      getCurrentLocation()
        // 성공시
        .then((coordinates: GeolocationCoordinates) => {
          const { latitude: x, longitude: y } = coordinates;
          console.log("x:", x);
          console.log("y:", y);
        })
        // 실패시
        .catch(() => {
          window.currentModal.close();
          window.kakaoModal.showModal();
        });
    }
    //
  }, [trigger]);

  return (
    <dialog id='currentModal' className='modal'>
      <form method='dialog' className='modal-box dark:text-white'>
        <div className='flex items-center'>
          <span className='loading loading-ring loading-lg mr-2'></span>
          <span>현재 위치 검색중입니다.</span>
        </div>
        <div className='modal-action'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn dark:text-white'>Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default CurrentGeolocationModal;
