// import { useState } from "react";
import "../src/App.css"
import ButtonContainer from "./components/buttonsConatainer";

const App = () => {
  // const [display, setDisplay] = useState('');

  // const handleClick = (value) => {
  //   if (value === '=') {
  //     try {
  //       setDisplay(eval(display).toString());
  //     } catch (error) {
  //       setDisplay('Error');
  //     }
  //   } else if (value === 'C') {
  //     setDisplay('');
  //   } else {
  //     setDisplay(display + value);
  //   }
  // };


  return (
    <div className="calculator">
      <div className="display"></div>
      {/* <div className="display">{display}</div> */}
      <ButtonContainer/>
    </div>
  );
}

export default App
