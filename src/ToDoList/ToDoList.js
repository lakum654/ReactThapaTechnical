 import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//kindacode.com/article/top-react-form-validation-libraries/#react-hook-form
const ToDoList = () => {
  const [savedData,setSaveData] = useState([]);
  const { register, handleSubmit,resetField, formState: { errors } } = useForm({ defaultValues: { item:'' } });;
  useEffect(() => {
    if(localStorage.getItem('item') != null) {
      setSaveData(JSON.parse(localStorage.getItem('item')));
    }
  }, [])
  
  // Save Data In Local Storage
  const onSubmit = (formData) => {
    // Set ID For Unique Record
    formData['id'] = (savedData.length+1);
    // Set New Data With Old Data In Local Storage
    localStorage.setItem('item',JSON.stringify([formData,...savedData]))
    //Set In State For Display Purpose
    setSaveData(JSON.parse(localStorage.getItem('item')));
    // Reset Item Name Field
    resetField('item');
   }

  //  Delete Items From LocalStorage
   const destroy = (id) => {
      const newItems = savedData.filter((item,key) => {
            return item.id !== id;
      })

      // Reset and SAVE Delete Items Back LocalStorage 
      localStorage.setItem('item',JSON.stringify(newItems))
      // Reset Back New Data In State
      setSaveData(JSON.parse(localStorage.getItem('item')));
   }
  return (
    <>
      <div className="container">
        <h1 className="text-center">✍️ To Do List Example ✍️</h1>
        <div className="d-flex align-items-center justify-content-center">
          <div className="main-section w-75">
            <form className="d-flex flex-nowrap m-3" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                id="item"
                name="name"
                className={errors.item ? "form-control rounded-0 border-1 border-danger" : "form-control rounded-0"}
                placeholder={errors.item ? `Enter Name Is Required..` : `Enter Your Item.`}
                {...register("item", { required: true})}
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
                    {item.id}.{item.item}
                    <div className="d-flex justify-content-between align-items-center">
                        {/* <i className="fas fa-edit m-2" style={{cursor:'pointer'}}></i> */}
                        <i className="fas fa-trash" style={{cursor:'pointer'}} onClick={() => destroy(item.id)}></i>
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
