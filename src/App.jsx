import React from "react";
import "./App.scss";
// import Slider from "./component/slider/Slider";
import ScrollUp from "./component/navigate-buttons/scrollUp/ScrollUp";
import SearchFilter from "./component/form/filter/SearchFilter";
import Header from "./component/header/Header";
import Search from "./component/form/search/Search";
import Intro from "./component/intro/Intro";
import Recommended from "./component/recommended";
import Reliability from "./component/reliability";
import Category from "./component/category";

function App() {
   return (
      <div className="App">
         <Header />
         <Search />
         <SearchFilter />
         <Intro />
         <Recommended />
         <Reliability />
         <Category/>
      </div>
   );
}

export default App;
