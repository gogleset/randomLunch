import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "한식", style: { backgroundColor: "green", textColor: "black" } },
  { option: "중식", style: { backgroundColor: "red", textColor: "white" } },
  { option: "일식" },
  { option: "양식" },
  { option: "랜덤" },
];

const Roulette = ({
  callback,
}: {
  callback: (data: string) => Promise<void>;
}) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    // 만약 mustSpin이 false라면
    if (!mustSpin) {
      // 지정할 넘버
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      const time = setTimeout(async () => {
        console.log("Prize number");
        await callback(data[newPrizeNumber].option);
        clearTimeout(time);
      }, 6000);
    }
  };

  return (
    <div className='flex flex-col mt-5'>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        // onStopSpinning={() => {
        //   setMustSpin(false);
        // }}
        radiusLineWidth={1}
        spinDuration={0.5}
      />
      <button
        className='btn btn-accent mt-2'
        onClick={handleSpinClick}
        disabled={mustSpin}>
        SPIN
      </button>
    </div>
  );
};
export default Roulette;
