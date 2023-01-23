import React from 'react'
import { useNavigate } from "react-router-dom";
const Menu = ({ categories, filterItem, setApiData, apiData, setActiveCategory }) => {

  let navigate = useNavigate();
  const history = window.history;
  const getAll = () => {
    setApiData(apiData);
    setActiveCategory("Best Items");
  }
  return (
    <>
      <div className="container text-center">
        <h2 className="text-danger text-center">Welcome to Resturant</h2>
        <div className="btn-group w-100" role="group" aria-label="Basic example">
          {
            categories.map((category, key) => {
              return (
                <>
                  <button type="button" className="btn btn-secondary" key={key.toString()} onClick={() => filterItem(category)}>{category}</button>
                </>
              )
            })
          }
          <button type="button" className="btn btn-secondary" onClick={() =>
            getAll()
          }>All</button>
          <button type="button" className="btn btn-secondary" onClick={() => history.go(-1)}>Home</button>
        </div>
      </div>
    </>
  )
}

export default Menu
