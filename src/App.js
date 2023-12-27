import logo from './logo.svg';
import './App.css';
import NavBar from './componenet/navbar/NavBar';
import AboutSec from './componenet/about_sec/about_sec';
import ProductSlider1 from './componenet/Productslider1/ProductSlider';
import ProductSlider from './componenet/ProductSlider/ProductSlider';
import './componenet/flaticon.css';
function App() {
  return (
  <>
    <NavBar />
    <AboutSec />
    <ProductSlider1 />
    <ProductSlider />
    </>
  );
}

export default App;
