/**
 * @gogleset 위치값 검사하는 component
 */
import { useAtom } from 'jotai';
import { loadAddressAtom } from './store/LocationAtom';
import Information from './components/Information';
import Content from './components/Content';

// components
// import Content from "./components/Content";
const Home = () => {
  const [loadAddress] = useAtom(loadAddressAtom);

  return (
    <main className='w-full flex justify-center h-full'>
      <div className='min-h-screen dark:bg-gray-700 w-1/2 max-md:w-screen flex flex-col justify-center items-center text-black'>
        {/* 로컬스토리지에 위치 값이 있다면 */}
        {loadAddress ? <Content /> : <Information />}
        {/* 로컬스토리지에 위치 값이 없다면 */}
      </div>
    </main>
  );
};

export default Home;
