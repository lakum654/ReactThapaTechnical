import React from 'react'

const Menu = ({categories,filterItem,setApiData,apiData,setActiveCategory}) => {
    return (
        <>
        <div className="container text-center">
        <h2 className="text-danger text-center">Welcome To Restaurant</h2>
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
            setApiData(apiData)
            }>All</button>
        </div>
      </div>
        </>
    )
}

export default Menu
