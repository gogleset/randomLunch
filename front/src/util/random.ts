/**
 * @gogleset 랜덤 관련 기능 모음입니다.
 */

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



export { getRandomNumber };
