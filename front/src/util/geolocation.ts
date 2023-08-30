/**
 * @gogleset 위치 정보
 */

function getCurrentLocation(): Promise<GeolocationCoordinates> {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords);
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not available"));
    }
  });
}

// 함수 호출 및 사용 예시
getCurrentLocation()
  .then((coordinates: GeolocationCoordinates) => {
    const { latitude: x, longitude: y } = coordinates;
    console.log("x:", x);
    console.log("y:", y);
  })
  .catch((error) => {
    console.error("Error getting current location:", error);
  });
