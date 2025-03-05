// import reactLogo from './assets/react.svg'
import "./App.css";
import lowtherLogo from "./assets/logo.svg";
import ldhcLogo from "./assets/LDHC.svg";
import Button from "./components/Button";
import jar1 from "./assets/jar-1.png";
import jar2 from "./assets/jar-2.png";
import jar3 from "./assets/jar-3.png";
import jar4 from "./assets/jar-4.png";
import lid1 from "./assets/lid-1.png";
import lid2 from "./assets/lid-2.png";
import lid3 from "./assets/lid-3.png";
import lid4 from "./assets/lid-4.png";
import Sections from "./components/Sections";
import ShopCards from "./components/ShopCards";

function App() {
  return (
    <div className="h-screen bg-ghost">
      <div className="relative h-[600px] bg-[url(assets/banner.jpg)] bg-cover bg-no-repeat bg-center">
        <img
          src={lowtherLogo}
          alt="Lowther logo of the lowther dragon."
          className="absolute left-1/2 -translate-x-1/2 top-[40px] drop-shadow"
          loading="eager"
        />
        <Button className="absolute bottom-[100px] left-1/2 -translate-1/2">Get in touch</Button>
      </div>
      <div className="p-6 pb-12 md:p-20 md:pb-40">
        <img src={ldhcLogo} alt="" className="mx-auto pb-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src={jar1} alt="Spring Creamed Honey - Jar" />
          <img src={jar2} alt="Pure Heather Honey - Jar" />
          <img src={jar3} alt="Summer Wildflower Honey - Jar" />
          <img src={jar4} alt="Heather Creamed Honey - Jar" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src={lid1} alt="Spring Creamed Honey - Lid" />
          <img src={lid2} alt="Pure Heather Honey - Lid" />
          <img src={lid3} alt="Summer Wildflower Honey - Lid" />
          <img src={lid4} alt="Heather Creamed Honey - Lid" />
        </div>
      </div>
      <Sections />
      <ShopCards />
    </div>
  );
}

export default App;
