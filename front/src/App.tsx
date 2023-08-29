/**
 * @gogleset App.tsx
 */
import { useState } from "react";
import { getRandomNumber } from "./util/random";
import { fetchRecommendedData } from "./util/fetch";
import Presentation from "./components/Presentation";
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
function App() {
  // 메뉴의 카테고리입니다.(대분류)
  const category = ["한식", "중식", "일식", "양식", "랜덤"];
  // 셀렉트한 메뉴의 index 번호입니다.
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [randomData, setRandomData] = useState<null | PlaceData>(null);

  // 서버에서 가져온 값을 state에 저장
  async function getRecommendedData(selectCategory: string) {
    // selectCategory가 랜덤일 경우엔 random으로 category 골라주기, 아닐경우 select한 카테고리 할당
    const select =
      selectCategory === "랜덤"
        ? category[getRandomNumber(0, category.length - 2)]
        : selectCategory;
    console.log("getRandommendedData!", select);
    try {
      // 서버 통신 response
      const response = await fetchRecommendedData(select);
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

  // 버튼 클릭시 실행될 함수
  function onClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    // 현재 선택하고 있는 category
    const selectCategory = category[selectedMenu];
    // server 통신 & state 설정
    getRecommendedData(selectCategory);
  }

  // 카테고리 선택시 실행될 함수
  function onSelectChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    // 어떤 index값을 select했는지 추출해서 state에 저장
    setSelectedMenu(Number(event.target.value));
  }

  return (
    <>
      {randomData === null && (
        <>
          <select
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
            className='btn'
            onClick={onClickHandler}
            disabled={randomData !== null}>
            돌리기!
          </button>
        </>
      )}

      {randomData !== null && <Presentation data={randomData} />}
    </>
  );
}

export default App;
