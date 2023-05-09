import React from "react";
import { houseInfo } from "../../server";

export default class Category extends React.Component {
   render() {
      return (
         <>
            <div className="category">
               {houseInfo.map(({ id, title, image: { url } }) => {
                  <div
                     key={id}
                     className="category__block"
                     style={{ background: `url(${url})` }}
                  >
                     <h4 className="category__title">{title}</h4>
                  </div>;
               })}
            </div>
         </>
      );
   }
}
