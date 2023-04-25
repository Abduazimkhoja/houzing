import React from "react";
import "./serchFilter.scss";
import { Button } from "./button/button";

function SearhcFilter() {
   return (
      <form className="serch__filter">
         <div className="filter__wrapper">
            <div className="filter__block">
               <h4 className="filter__title">address</h4>
               <div className="filter__inputs">
                  <input
                     className="filter__input"
                     type="text"
                     name="Country"
                     placeholder="Country"
                  />
                  <input
                     className="filter__input"
                     type="text"
                     name="Region"
                     placeholder="Region"
                  />
                  <input
                     className="filter__input"
                     type="text"
                     name="City"
                     placeholder="City"
                  />
                  <input
                     className="filter__input"
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
                     className="filter__input"
                     type="number"
                     name="rooms"
                     placeholder="Rooms"
                  />
                  <input
                     className="filter__input"
                     type="number"
                     name="size"
                     placeholder="Size"
                  />
                  <select className="filter__input" name="sort">
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
                     className="filter__input"
                     type="number"
                     name="min"
                     placeholder="Min price"
                  />
                  <input
                     className="filter__input"
                     type="number"
                     name="max"
                     placeholder="Max price"
                  />
               </div>
            </div>
         </div>
         <div className="filter__buttons">
            {/* <div class="button button-blue">Submit</div>
         <div class="button button-gray">Cancel</div> */}
            <Button text="Cancel" width="128px" class="gray" />
            <Button text="Submit" width="128px" class="blue" />
         </div>
      </form>
   );
}
export default SearhcFilter;
