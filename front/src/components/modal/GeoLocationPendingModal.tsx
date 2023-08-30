import React from "react";

const GeoLocationPendingModal = () => {
  return (
    <dialog id='geolocationPendingModal' className='modal'>
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

export default GeoLocationPendingModal;
