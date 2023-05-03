import React from "react";
import "./intro.scss";
import { houseInfo } from "../../server";

class Intro extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: houseInfo,
         position: 0,
      };
   }
   render() {
      // console.log(this.state.position);

      let introLength = this.state.data.length * 100;
      const slidePlus = () => {
         this.state.position == -introLength + 100
            ? this.setState({ position: 0 })
            : this.setState({ position: this.state.position - 100 });
      };
      const slideMinus = () => {
         this.state.position === 0
            ? this.setState({ position: -introLength + 100 })
            : this.setState({ position: this.state.position + 100 });
      };

      return (
         <div className="intro">
            {this.state.data.map(
               ({
                  id,
                  title,
                  address,
                  price,
                  prevPrice,
                  beds,
                  baths,
                  garages,
                  area,
                  image: { url, alt },
               }) => {
                  return (
                     <>
                        <div
                           className="intro__wrap"
                           style={{
                              // backgroundImage: `url(${url}) center / cover no-repeat`,
                              backgroundImage: `linear-gradient(#000000cf,#000000ab),url(${url})`,
                              transform: `translateX(${this.state.position}vw)`,
                           }}
                        >
                           <div className="intro__text">
                              <h2 className="intro__title">{title}</h2>
                              <h4 className="intro__subtitle">{address}</h4>
                              <div className="intro__features">
                                 <div className="intro__block">
                                    <img
                                       src="./img/features/bed.svg"
                                       alt=""
                                       className="intro__icon"
                                    />
                                    <p className="intro__has">{beds} beds</p>
                                 </div>
                                 <div className="intro__block">
                                    <img
                                       src="./img/features/bath.svg"
                                       alt=""
                                       className="intro__icon"
                                    />
                                    <p className="intro__has">{baths} Baths</p>
                                 </div>
                                 <div className="intro__block">
                                    <img
                                       src="./img/features/car.svg"
                                       alt=""
                                       className="intro__icon"
                                    />
                                    <p className="intro__has">
                                       {garages} Garage
                                    </p>
                                 </div>
                                 <div className="intro__block">
                                    <img
                                       src="./img/features/ruler.svg"
                                       alt=""
                                       className="intro__icon"
                                    />
                                    <p className="intro__has">{area} Sq Ft</p>
                                 </div>
                              </div>
                              <p className="intro__price">{price}</p>
                              <a
                                 href="#"
                                 className="intro__button button button-white"
                              >
                                 Read more
                              </a>
                           </div>
                        </div>
                     </>
                  );
               }
            )}
            <button
               id="minus"
               className="slide__arrow slide__arrow-minus"
               onClick={slideMinus}
            ></button>
            <button
               id="plus"
               className="slide__arrow slide__arrow-plus"
               onClick={slidePlus}
            ></button>
         </div>
      );
   }
}

export default Intro;
