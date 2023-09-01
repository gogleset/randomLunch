/**
 * @gogleset 랜덤이 실행될 컴포넌트
 */

import React, { useState } from "react";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// util
import { getRandomNumber } from "../util/random";
import { fetchRecommendedData } from "../util/fetch";
// components
import ResultCard from "./ResultCard";
import Roulette from "./roulette/Roulette";
// 전역 state
import { loadAddressAtom, currentLocationAtom } from "../store/LocationAtom";

// 서버에서 받아온 데이터 타입
export type PlaceData = {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
};

const Content = () => {
  // 메뉴의 카테고리입니다.(대분류)
  const category = ["한식", "중식", "일식", "양식", "랜덤"];
  // 셀렉트한 메뉴의 index 번호입니다.
  const [selectedMenu, setSelectedMenu] = useState(0);
  // 랜덤한 데이터(서버데이터)
  const [randomData, setRandomData] = useState<null | PlaceData>(null);
  // 룰렛을 보여줄지 말지
  const [isShowRoulette, setIsShowRoulette] = useState(false);
  // 버튼을 눌렀는지 안눌렀는지
  const [isBtnClick, setIsBtnClick] = useState(false);
  // 전역으로 관리되는 주소값
  const [loadAddress, setLoadAddress] = useAtom(loadAddressAtom);
  const [currentLocation, setCurrentLocation] = useAtom(currentLocationAtom);

  // 서버에서 가져온 값을 state에 저장
  async function getRecommendedData(selectCategory: string) {
    // selectCategory가 랜덤일 경우엔 random으로 category 골라주기, 아닐경우 select한 카테고리 할당
    const select =
      selectCategory === "랜덤"
        ? category[getRandomNumber(0, category.length - 2)]
        : selectCategory;
    console.log("getRandommendedData!", select);
    try {
      if (currentLocation === null)
        throw new Error("current loction not found");
      //랜덤 음식 서버 통신 response
      const response = await fetchRecommendedData(
        select,
        Number(currentLocation?.x),
        Number(currentLocation?.y)
      );
      // Json화
      const responseJson = await response.json();
      // Json에서 또 랜덤데이터 돌리기
      const result =
        responseJson.documents[
          getRandomNumber(0, responseJson.documents.length - 1)
        ];
      //랜덤된 state 업데이트
      setRandomData(() => {
        return { ...result };
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  // 초기화 버튼 클릭시 실행될 함수
  function initializationBtnClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    // localStorage Item 리셋
    setLoadAddress(RESET);
    setCurrentLocation(RESET);
  }
  // 룰렛돌리기 버튼 클릭시 실행될 함수
  function showRouletteBtnClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    setIsShowRoulette(!isShowRoulette);
  }
  // 버튼 클릭시 실행될 함수
  function onClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    // 현재 선택하고 있는 category
    const selectCategory = category[selectedMenu];
    // server 통신 & state 설정
    setIsBtnClick(true);
    getRecommendedData(selectCategory);
  }

  // 카테고리 선택시 실행될 함수
  function onSelectChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    // 어떤 index값을 select했는지 추출해서 state에 저장
    setSelectedMenu(Number(event.target.value));
  }
  console.log(currentLocation);
  return (
    <div className='min-h-screen w-1/2 max-md:w-screen flex flex-col items-center  '>
      <div className='flex justify-center items-center my-4'>
        <FontAwesomeIcon icon={faLocationDot} beat color='black' />
        <h1 className='ml-2 text-black font-bold text-xl dark:text-white'>
          {loadAddress?.bname}
        </h1>
      </div>
      <button
        className='btn btn-neutral btn-xl '
        onClick={initializationBtnClickHandler}
        disabled={isBtnClick}>
        위치 초기화하기
      </button>
      <div className='flex w-80 justify-center items-center my-4'>
        <select
          className='select select-bordered w-full max-w-xs mr-2 dark:text-white border-solid'
          name=''
          id='food'
          onChange={onSelectChangeHandler}
          defaultValue={"0"}>
          {category.map((item, index) => {
            return (
              <option value={index} key={index}>
                {item}
              </option>
            );
          })}
        </select>
        <button
          className='btn btn-primary btn-xl '
          onClick={onClickHandler}
          disabled={isBtnClick}>
          돌리기!
        </button>
      </div>
      <div>
        <button
          className='btn btn-primary btn-xl '
          onClick={showRouletteBtnClickHandler}
          disabled={isBtnClick}>
          룰렛 돌리기!
        </button>
      </div>
      {isShowRoulette && (
        <Roulette callback={getRecommendedData} setDisabled={setIsBtnClick} />
      )}
      {randomData !== null && <ResultCard data={randomData} />}
    </div>
  );
};

export default Content;
