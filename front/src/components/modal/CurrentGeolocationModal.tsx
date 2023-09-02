/**
 * @gogleset GeoLocation API를 이용한 위치 추출 및 모달 컴포넌트
 */

const CurrentGeolocationModal = () => {
  return (
    <dialog id='currentModal' className='modal'>
      <form method='dialog' className='modal-box dark:text-white w-72'>
        <div className='flex items-center'>
          <span className='loading loading-ring loading-lg mr-2'></span>
          <span>현재 위치 검색중입니다.</span>
        </div>
      </form>
    </dialog>
  );
};

export default CurrentGeolocationModal;
