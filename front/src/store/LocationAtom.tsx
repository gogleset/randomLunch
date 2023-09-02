import { atomWithStorage } from 'jotai/utils';

type AddressInfo = {
  address: string;
  addressName: string;
};

type CurrentLocation = {
  x: number;
  y: number;
};

// 현재 위치 아톰
const currentLocationAtom = atomWithStorage<CurrentLocation | null>(
  'currentLocation',
  null
);

// {address: '경기 의정부시 물내음길 10', zonecode: '11800'}
// 도로명주소로 검색한 위치 아톰
const loadAddressAtom = atomWithStorage<AddressInfo | null>(
  'loadAddress',
  null
);

export { currentLocationAtom, loadAddressAtom };
