import React from "react";
import "./recommended.scss";
import { houseInfo } from "../../server";

class Recommended extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: houseInfo,
      };
   }
   render() {
      return (
         <div className="recommended">
            <div className="container">
               <h3 className="recommended__title"></h3>
               <h4 className="recommended__subtitle"></h4>
               <div className="recommended__card card">
                  <div className="card__image"></div>
                  <div className="card__info">
                     <h4 className="card__title"></h4>
                     <h5 className="card__subtitle"></h5>
                     <div className="card__features"></div>
                     <div className="card__bottom">
                        <div className="card__prices">
                           <p className="card__price-prev"></p>
                           <p className="card price"></p>
                        </div>
                        <div className="card__button">
                           <button className="card__fullscreen"></button>
                           <button className="card__favorite"></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Recommended;
