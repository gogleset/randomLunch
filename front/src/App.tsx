/**
 * @gogleset App.tsx
 */
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
