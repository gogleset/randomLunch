/**
 * @gogleset 서버 fatch 기능 모음입니다.
 */

async function fetchRecommendedData(
  query: string,
  x: number = 127.095037,
  y: number = 37.4121312
) {
  return await fetch(
    `/dapi.kakao/v2/local/search/keyword.json?y=${y}&x=${x}0&radius=800&category_group_code=FD6&query=${query}`,
    {
      headers: {
        Authorization: "KakaoAK e81fe8a8b57c8498edf0dc7040da1a84",
      },
    }
  );
}

export { fetchRecommendedData };
