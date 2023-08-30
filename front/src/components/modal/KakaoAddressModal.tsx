/**
 * @gogleset 카카오 주소 API를 이용한 주소 추출 모달 컴포넌트
 */

import DaumPostCode from "react-daum-postcode";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { loadAddressAtom, currentLocationAtom } from "../../store/LocationAtom";
import { getXY } from "../../util/fetch";

const KakaoModal = () => {
  const [loadAddress, setLoadAddressAtom] = useAtom(loadAddressAtom);
  const [, setXyAtom] = useAtom(currentLocationAtom);
  const selectAddress = async (data) => {
    if (!data) throw new Error("Address Not Found");
    try {
      // 도로명주소 -> xy좌표로 바꿈
      const response = await getXY(data.address);
      const result = await response.json();
      console.log(result.documents[0].address);
      // 전역상태관리에 도로명 주소 정보 넣기
      setLoadAddressAtom(data);
      // 다시 주소를 좌표로 바꾼것을 전역상태관리에 넣기
      setXyAtom({
        x: result.documents[0].address.x,
        y: result.documents[0].address.y,
      });
    } catch (error) {
      throw new Error("Error");
    }
  };
  useEffect(() => {
    console.log(loadAddress);
    if (loadAddress) {
      window.kakaoModal.close();
    }
  }, [loadAddress]);
  return (
    <dialog id='kakaoModal' className='modal'>
      <form method='dialog' className='modal-box dark:text-white w-96 px-2'>
        <DaumPostCode onComplete={selectAddress} autoClose={false} />
        <div className='modal-action'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn dark:text-white'>닫기</button>
        </div>
      </form>
    </dialog>
  );
};

export default KakaoModal;
