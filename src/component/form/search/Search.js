import React from "react";
import "./search.scss";
// import { Button } from "../../button/button";

function Search() {
   const hidden = () => {
      let hiddenName = document.querySelector(`.filter`);
      if (hiddenName.classList.contains("hide"))
         hiddenName.classList.remove("hide");
      else hiddenName.classList.add("hide");
   };
   return (
      <div className="search ">
         <div className="container">
            <div className="search__wrap">
               <form action className="search__form ">
                  <div className="input-gray search__input">
                     <i class="icon icon-serch"></i>
                     <input
                        type="search"
                        placeholder="Enter an address, neighborhood, city, or ZIP code"
                     />
                  </div>
               </form>
               <div className="search__buttons">
                  <button
                     className="button button-gray search__button search__button-advanced"
                     onClick={hidden}
                  >
                     <i class="icon icon-filter"></i>Advanced
                  </button>
                  <button
                     className=" button button-blue search__button search__button-search"
                     type="submit"
                  >
                     <i class="icon icon-loupe"></i>Search
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Search;
