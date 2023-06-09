import React from "react";
import "./recommended.scss";
import { houseInfo } from "../../server";
import {
   Bed,
   Bath,
   Garage,
   Ruler,
   Resize,
   Favorite,
   Video,
   Photo,
   ArrowLeft,
   ArrowRight,
} from "../../assets/icon/svg";

class Recommended extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: houseInfo,
         fullImageUrl: "",
         position: 0,
      };
   }
   render() {
      const fullScreeImage = React.createRef();
      const cardWrap = React.createRef();

      const slidePlus = () => {
         let cardWidth = cardWrap.current.clientWidth;
         let cardLength = this.state.data.length * cardWidth;

         this.state.position == -cardLength + cardWidth * 3
            ? this.setState({ position: 0 })
            : this.setState({ position: this.state.position - cardWidth });
      };
      const slideMinus = () => {
         let cardWidth = cardWrap.current.clientWidth;
         let cardLength = this.state.data.length * cardWidth;

         this.state.position === 0
            ? this.setState({ position: -cardLength + cardWidth * 3 })
            : this.setState({ position: this.state.position + cardWidth });
      };

      const fullPhoto = (id) => {
         this.setState({
            fullImageUrl: this.state.data[id - 1].image.url,
         });
         fullScreeImage.current.style.cssText = `transform: scale(1)`;
      };
      const closeFullImage = () => {
         fullScreeImage.current.style.cssText = `transform: scale(0)`;
      };
      return (
         <div className="recommended">
            <img
               ref={fullScreeImage}
               onClick={closeFullImage}
               className="image-full"
               src={this.state.fullImageUrl}
               alt=""
            />

            <div className="container">
               <h3 className="title">Recommended</h3>
               <h4 className="subtitle">
                  Nulla quis curabitur velit volutpat auctor bibendum
                  consectetur sit.
               </h4>
               <div className="recommended__card card">
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
                        countPhoto,
                        countVideo,
                     }) => {
                        return (
                           <div
                              key={id}
                              ref={cardWrap}
                              className="card__wrap"
                              style={{
                                 transform: `translateX(${this.state.position}px)`,
                              }}
                           >
                              <div className="card__inner">
                                 <div className="card__images">
                                    <p className="card__featured">FEATURED</p>
                                    <p className="card__sale">FOR SALE</p>
                                    <img
                                       className="card__photo"
                                       src={url}
                                       alt={alt}
                                    />
                                    <div className="card__quantity">
                                       <Photo style={{ fill: "#fff" }} />{" "}
                                       {countPhoto}
                                       <Video style={{ fill: "#fff" }} />{" "}
                                       {countVideo}
                                    </div>
                                    <img
                                       className="card__user"
                                       src={`./img/user/user${id}.png`}
                                       alt=""
                                    />
                                 </div>
                                 <div className="card__info">
                                    <div className="card__text">
                                       <h4 className="card__title">{title}</h4>
                                       <h5 className="card__subtitle">
                                          {address}
                                       </h5>
                                       <div className="card__features">
                                          <div className="card__has">
                                             <Bed style={{ fill: "#696969" }} />
                                             <p className="">{beds} beds</p>
                                          </div>
                                          <div className="card__has">
                                             <Bath
                                                style={{ fill: "#696969" }}
                                             />
                                             <p className="">{baths} Baths</p>
                                          </div>
                                          <div className="card__has">
                                             <Garage
                                                style={{ fill: "#696969" }}
                                             />
                                             <p className="">
                                                {garages} Garage
                                             </p>
                                          </div>
                                          <div className="card__has">
                                             <Ruler
                                                style={{ fill: "#696969" }}
                                             />
                                             <p className="">{area} Sq Ft</p>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="card__bottom">
                                       <div className="card__prices">
                                          <p className="card__price-prev">
                                             {prevPrice}
                                          </p>
                                          <p className="card__price">{price}</p>
                                       </div>
                                       <div className="card__button">
                                          <button
                                             className="card__fullscreen"
                                             onClick={() => fullPhoto(id)}
                                          >
                                             <Resize
                                                style={{ fill: "#696969" }}
                                             />
                                          </button>
                                          <button className="card__favorite">
                                             <Favorite
                                                style={{ fill: "#696969" }}
                                             />
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        );
                     }
                  )}
               </div>
            </div>
            <button
               onClick={slidePlus}
               className="recommended__button recommended__button-plus"
            >
               <ArrowRight style={{ fill: "#0D263B" }} />
            </button>
            <button
               onClick={slideMinus}
               className="recommended__button recommended__button-minus"
            >
               <ArrowLeft style={{ fill: "#0D263B" }} />
            </button>
         </div>
      );
   }
}

export default Recommended;
