import React from "react";
import "./App.scss";
import Slider from "./component/slider/Slider";
import ScrollUp from "./component/navigate-buttons/scrollUp/ScrollUp";
import {ButtonBlue, Social} from "./component/form/button/button";
import SearhcFilter from "./component/form/SerchFilter"

function App() {
   return (
      <div className="App">
         {/* <ButtonBlue text="Search" width="200px" class="blue" />
         <ButtonBlue text="Search" width="200px" class="gray" />
         <ButtonBlue text="Search" width="200px" class="border-gray" />
         <ButtonBlue text="Search" width="200px" class="white" /> */}
         {/* <Social/> */}
         <SearhcFilter/>
      </div>
   );
}

export default App;
