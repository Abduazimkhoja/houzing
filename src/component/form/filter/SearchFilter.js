import React from "react";
import "./searchFilter.scss";
// import { Button } from "../../button/button";

function SearchFilter() {
   const hidden = () => {
      let hiddenName = document.querySelector(`.filter`);
      if (hiddenName.classList.contains("hide"))
         hiddenName.classList.remove("hide");
      else hiddenName.classList.add("hide");
   };
   return (
      <div className="filter">
         <div className="filter__wrap">
            <form className="filter__form">
               <div className="filter__block">
                  <h4 className="filter__title">address</h4>
                  <div className="filter__inputs">
                     <input
                        className="input-gray"
                        type="text"
                        name="Country"
                        placeholder="Country"
                     />
                     <input
                        className="input-gray"
                        type="text"
                        name="Region"
                        placeholder="Region"
                     />
                     <input
                        className="input-gray"
                        type="text"
                        name="City"
                        placeholder="City"
                     />
                     <input
                        className="input-gray"
                        type="text"
                        name="Zip code"
                        placeholder="Zip code"
                     />
                  </div>
               </div>
               <div className="filter__block">
                  <h4 className="filter__title">Apartment info</h4>
                  <div className="filter__inputs">
                     <input
                        className="input-gray"
                        type="number"
                        name="rooms"
                        placeholder="Rooms"
                     />
                     <input
                        className="input-gray"
                        type="number"
                        name="size"
                        placeholder="Size"
                     />
                     <select className="input-gray" name="sort">
                        <option value="" selected disabled hidden>
                           Sort
                        </option>
                        <option value="cheapest">the cheapest</option>
                        <option value="expensive">the most expensive</option>
                        <option value="newest">the newest</option>
                        <option value="recommended">recommended to you</option>
                     </select>
                  </div>
               </div>
               <div className="filter__block">
                  <h4 className="filter__title">Price</h4>
                  <div className="filter__inputs">
                     <input
                        className="input-gray"
                        type="number"
                        name="min"
                        placeholder="Min price"
                     />
                     <input
                        className="input-gray"
                        type="number"
                        name="max"
                        placeholder="Max price"
                     />
                  </div>
               </div>
            </form>
            <div className="filter__buttons">
               <button
                  className="button button-gray filter__button"
                  onClick={hidden}
               >
                  Cancel
               </button>
               <button
                  className=" button button-blue filter__button"
                  type="submit"
               >
                  Submit
               </button>
            </div>
         </div>
      </div>
   );
}
export default SearchFilter;
