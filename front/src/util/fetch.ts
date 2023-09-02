/**
 * @gogleset 서버 fatch 기능 모음입니다.
 */

const fetchEndpointURL = `/dapi.kakao/v2/local`;
const fetchAuthorization = `KakaoAK e81fe8a8b57c8498edf0dc7040da1a84`;

async function fetchRecommendedData(
  query: string,
  x?: number,
  y?: number,
  radius: number = 800
) {
  if (!x || !y) throw new Error('no x, y data');
  return await fetch(
    `${fetchEndpointURL}/search/keyword.json?y=${y}&x=${x}0&radius=${radius}&category_group_code=FD6&query=${query}`,
    {
      headers: {
        Authorization: fetchAuthorization,
      },
    }
  );
}

async function getXY(address: string) {
  if (address === null) throw new Error('address cannot be null');
  return await fetch(
    `${fetchEndpointURL}/search/address.json?query=${address}`,
    {
      headers: {
        Authorization: fetchAuthorization,
      },
    }
  );
}

async function getAddress(x: number, y: number) {
  if (!x || !y) throw new Error('x or y cannot be null');
  return await fetch(
    `${fetchEndpointURL}/geo/coord2address.json?x=${x}&y=${y}&input_coord=WGS84`,
    {
      headers: {
        Authorization: fetchAuthorization,
      },
    }
  );
}

export { fetchRecommendedData, getXY, getAddress };
