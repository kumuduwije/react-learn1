import "w3-css/w3.css"
import './App.css';
import {Container} from "./Container";
import {Container2} from "./Container";

function App() {

  return (
    <div >
    <Container/>
    <Container2  country={"India"} desc={"India is a one of the biggest country in Asian  continent"}/>
      <Container2 country={"America"} desc={"America is a well developed country."}/>
    </div>
  );
}

export default App;
