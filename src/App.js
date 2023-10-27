import "bootstrap/dist/css/bootstrap.min.css";
// import Swiper and modules styles
import "swiper/css";
import "./App.css";
import Header from "./pages/Header";
import Banner from "./pages/Banner";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
    </>
  );
}

export default App;
