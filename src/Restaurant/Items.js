import React from 'react'

const Items = ({apiData,activeCategory}) => {  
    return (
    <>
    <div className="container">  
      <h2>{activeCategory}</h2>      
        <div className="row">
          {apiData.map((curEle,key) => {
            let { id, name, category, image,description } = curEle;
            return (
              <div className="col-4 mt-2" key={key}>
                <div className="card rounded-0">
                  <img
                    className="card-img-top w-100"
                    style={{ height: "300px" }}
                    src={image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      <a>{name}</a>
                    </h4>
                    <p className="card-text">
                      {description.substr(0,100)}
                    </p>
                    <a href="#" className="btn btn-primary">
                      View more...
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
        </>
    )
}

export default Items
