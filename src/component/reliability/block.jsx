import React from "react";
import "./reliability.scss";

class Block extends React.Component {
   render() {
      return (
         <div className="reliability__block">
            {this.props.icon}
            <div className="reliability__title">{this.props.title}</div>
            <div className="reliability__subtitle">{this.props.subtitle}</div>
         </div>
      );
   }
}

export default Block;
