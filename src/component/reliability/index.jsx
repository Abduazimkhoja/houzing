import React from "react";
import Block from "./block";
import { Calculate, Discord, House, Map } from "../../assets/icon/svg";

class Reliability extends React.Component {
   render() {
      return (
         <div className="reliability">
            <div className="container">
               <h4 className="title">Why Choose Us?</h4>
               <h5 className="subtitle">
                  Nulla quis curabitur velit volutpat auctor bibendum
                  consectetur sit.
               </h5>
               <div className="reliability__wrap">
                  <Block
                     title="Trusted By Thousands"
                     subtitle="With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."
                     icon={<Discord style={{ fill: "#0061DF" }} />}
                  />
                  <Block
                     title="Wide Renge Of Properties"
                     subtitle="With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."
                     icon={<Calculate style={{ fill: "#0061DF" }} />}
                  />
                  <Block
                     title="Financing Made Easy"
                     subtitle="With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."
                     icon={<House style={{ fill: "#0061DF" }} />}
                  />
                  <Block
                     title="See Neighborhoods"
                     subtitle="With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."
                     icon={<Map style={{ fill: "#0061DF" }} />}
                  />
               </div>
            </div>
         </div>
      );
   }
}

export default Reliability;
