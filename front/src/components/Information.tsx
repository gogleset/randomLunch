/**
 * @gogleset 사용자가 처음 입장 시 localstorage에 현재 위치값이 없을때 나타나는 컴포넌트
 */

import { useAtom } from 'jotai';
import { currentLocationAtom, loadAddressAtom } from '../store/LocationAtom';
import { getCurrentLocation } from '../util/geolocation';
import { getAddress } from '../util/fetch';
import KakaoModal from './modal/KakaoAddressModal';
import CurrentGeolocationModal from './modal/CurrentGeolocationModal';

const Information = () => {
  // 현재 위치 atom
  const [, setCurrentLocation] = useAtom(currentLocationAtom);
  const [, setLoadAddress] = useAtom(loadAddressAtom);
  // 현재 위치를 받아올 때 쓸 수 있는 함수
  async function currentLocationClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    // 로딩 모달 띄우기
    window.currentModal.showModal();
    try {
      const { latitude: y, longitude: x } = await getCurrentLocation();
      // 현재 위치 atom 및 localStorage저장
      setCurrentLocation({ x, y });
      const response = await getAddress(x, y);
      const result = await response.json();
      console.log(result.documents[0].address);
      setLoadAddress({
        // 도로명주소 할당
        address: result.documents[0].road_address.address_name,
        addressName:
          // 3depth_name이 있다면 할당, 아니면 2depth_name 할당
          result.documents[0].address.region_3depth_name !== ''
            ? result.documents[0].address.region_3depth_name
            : result.documents[0].address.region_2depth_name,
      });
      // 로딩 모달 끄기
      window.currentModal.close();
    } catch (error) {
      // 에러시
      // 로딩 모달 끄기
      alert('현재 위치를 가져올 수 없습니다. 위치 관련 설정을 확인해주세요.');
      window.currentModal.close();
      console.error(error);
    }
  }
  return (
    <div className=' w-60 h-60 flex flex-col items-center justify-around'>
      <button className='btn btn-info' onClick={currentLocationClickHandler}>
        현재 위치로 검색
      </button>
      <CurrentGeolocationModal />
      <button
        className='btn btn-primary'
        onClick={() => window.kakaoModal.showModal()}
      >
        주소값으로 검색
      </button>
      <KakaoModal />
    </div>
  );
};

export default Information;
