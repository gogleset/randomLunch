/**
 * @gogleset 보여질 카드 섹션입니다.
 */

import type { PlaceData } from "../Content";

const ResultCard: React.FC<{ data: PlaceData }> = ({ data }) => {
  console.log(data);

  if (!data) return <>돌려돌려</>;

  function onClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    window.open(data.place_url);
  }
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>{data.place_name}</h2>
        <p>{data.category_name}</p>
        <p>{data.phone}</p>
        <p>{data.road_address_name}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary' onClick={onClickHandler}>
            더보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
