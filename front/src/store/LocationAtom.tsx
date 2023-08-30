import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type AddressInfo = {
  address: string;
  addressEnglish: string;
  addressType: string;
  apartment: string;
  autoJibunAddress: string;
  autoJibunAddressEnglish: string;
  autoRoadAddress: string;
  autoRoadAddressEnglish: string;
  bcode: string;
  bname: string;
  bname1: string;
  bname1English: string;
  bname2: string;
  bname2English: string;
  bnameEnglish: string;
  buildingCode: string;
  buildingName: string;
  hname: string;
  jibunAddress: string;
  jibunAddressEnglish: string;
  noSelected: string;
  postcode: string;
  postcode1: string;
  postcode2: string;
  postcodeSeq: string;
  query: string;
  roadAddress: string;
  roadAddressEnglish: string;
  roadname: string;
  roadnameCode: string;
  roadnameEnglish: string;
  sido: string;
  sidoEnglish: string;
  sigungu: string;
  sigunguCode: string;
  sigunguEnglish: string;
  userLanguageType: string;
  userSelectedType: string;
  zonecode: string;
};

type CurrentLocation = {
  x: string;
  y: string;
};

// 현재 위치 아톰
const currentLocationAtom = atomWithStorage<CurrentLocation | null>(
  "currentLocation",
  null
);

// {address: '경기 의정부시 물내음길 10', zonecode: '11800'}
// 도로명주소로 검색한 위치 아톰
const loadAddressAtom = atomWithStorage<AddressInfo | null>(
  "loadAddress",
  null
);

export { currentLocationAtom, loadAddressAtom };
