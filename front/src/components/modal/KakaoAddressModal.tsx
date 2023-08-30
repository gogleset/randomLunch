import React from "react";
import DaumPostCode from "react-daum-postcode";

const MyModal1 = () => {
  const selectAddress = (data) => {
    console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `);
  };
  return (
    <dialog id='kakaoModal' className='modal'>
      <form method='dialog' className='modal-box dark:text-white'>
        <DaumPostCode onComplete={selectAddress} autoClose={false} />
        <div className='modal-action'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn dark:text-white'>Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default MyModal1;
