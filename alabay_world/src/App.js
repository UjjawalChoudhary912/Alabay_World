import firstpicture from "./components/Images/firstpicture.png";
import './App.css';
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";

function App() {
  return (
    <div>
      <img className="Background" src={firstpicture} alt={firstpicture} />
      <div className="page-container">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
      </div>
    </div>
  );
}

export default App;
