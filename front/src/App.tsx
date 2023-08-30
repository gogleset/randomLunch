/**
 * @gogleset App.tsx
 */
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
