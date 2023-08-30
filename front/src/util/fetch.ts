/**
 * @gogleset 서버 fatch 기능 모음입니다.
 */

async function fetchRecommendedData(query: string, x?: number, y?: number) {
  if (!x || !y) throw new Error("no x, y data");
  return await fetch(
    `/dapi.kakao/v2/local/search/keyword.json?y=${y}&x=${x}0&radius=800&category_group_code=FD6&query=${query}`,
    {
      headers: {
        Authorization: "KakaoAK e81fe8a8b57c8498edf0dc7040da1a84",
      },
    }
  );
}

async function getXY(address: string) {
  if (address === null) throw new Error("address cannot be null");
  return await fetch(
    `/dapi.kakao/v2/local/search/address.json?query=${address}`,
    {
      headers: {
        Authorization: "KakaoAK e81fe8a8b57c8498edf0dc7040da1a84",
      },
    }
  );
}

export { fetchRecommendedData, getXY };
