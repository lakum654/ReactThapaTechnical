import React, { useState } from "react";
import apiData from "./apiData";
import Items from "./Items";
import Menu from "./Menu";
console.log(apiData);
const Restaurant = () => {
  const [data, setApiData] = useState(apiData);
  const [activeCategory, setActiveCategory] = useState("");
  // Get Unique Category Name From API Data
  let uniqueRecord = [...new Set(
    apiData.map((currELe) => {
      return currELe.category;
    }))]
  const [categories, setCategory] = useState(uniqueRecord);

  // Get Items From Category Wise
  const filterItem = (category) => {
    setActiveCategory(category);
    const filteredItems = apiData.filter((curEle) => {
      return curEle.category === category;
    });

    setApiData(filteredItems);
    console.log(filteredItems);
  }
  return (
    <>
      <Menu categories={categories} filterItem={filterItem} setApiData={setApiData} apiData={apiData} setActiveCategory={setActiveCategory} />
      <Items apiData={data} activeCategory={activeCategory} />
    </>
  );
};

export default Restaurant;