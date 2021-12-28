import "w3-css/w3.css"
import './App.css';
import {Container} from "./Container";
import {Container2} from "./Container";
import {ButtonTest} from "./Container";
import {Garage} from "./List";
import MyForm from "./Form";

function App() {

  return (
    <div >
    <Container/>

      <Container2 country={"America"} desc={"America is a well developed country."}/>
      {/*This Button test use if conditions */}
      <ButtonTest goalStatus={true} />

      <Garage/>

      <MyForm/>
    </div>
  );
}

export default App;
