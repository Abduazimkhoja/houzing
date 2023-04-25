import React from "react";
import SliderArrow from "./arrow/Arrow";
import SliderDot from "./dot/Dot";
import houseInfo from "../../server";
function Slider() {
   // const titleCard = houseInfo.map(v => {
   //    return v.title
   // })
   return (
      <div className="slider">
         <SliderArrow/>
      </div>
   );
}

export default Slider;
