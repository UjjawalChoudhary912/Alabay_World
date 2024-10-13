import firstpicture from "./components/Images/firstpicture.png"
import './App.css'
import Page1 from "./components/Page1";



function App() {
  return (
    <div>
     <img className="Background" src={firstpicture} alt={firstpicture}/>
     <Page1/>
 </div>
  );
}

export default App;
