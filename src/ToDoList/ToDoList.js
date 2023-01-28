import React, { useEffect, useState } from "react";
import Footer from "../Footer";

const ToDoList = () => {
  const [form, setItem] = useState({item:'',id:1})
  // const [list,setList] = useState([]);
  const [savedData,setSaveData] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('item') != null) {
      setSaveData(JSON.parse(localStorage.getItem('item')));
    }
  }, [])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('item',JSON.stringify([form,...savedData]))
    setSaveData(JSON.parse(localStorage.getItem('item')));
    setItem({item:''})
   }
  return (
    <>
      <div className="container">
        <h1 className="text-center">✍️ To Do List Example ✍️</h1>
        <div className="d-flex align-items-center justify-content-center">
          <div className="main-section w-75">
            <form className="d-flex flex-nowrap m-3" onSubmit={handleSubmit}>
              <input
                type="text"
                id="item"
                name="name"
                className="form-control rounded-0"
                placeholder="Enter Your Item."
                value={form['item']}
                onChange={(e) => setItem({id:parseInt(savedData.length)+1,item:e.target.value})}
              />
              <button type="submit"
                className="btn rounded-0 btn-success m-1"
                style={{ height: "35px" }}>
                <i className="fas fa-plus"></i>
              </button>
            </form>

            <ul className="list-group">
              {
                savedData.map((item,key) => {
                   return (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={key}>
                    {key+1}.{item.item}
                    <div className="d-flex justify-content-between align-items-center">
                        <i className="fas fa-edit m-2" style={{cursor:'pointer'}}></i>
                        <i className="fas fa-trash" style={{cursor:'pointer'}}></i>
                    </div>
                  </li>
                   );
                })
              }
            </ul>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default ToDoList;
