import Restaurant from "./Restaurant/Restaurant"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import UseState from "./useState/UseState"
import UseReducer from "./useReducer/UseReducer"
import ToDoList from "./ToDoList/ToDoList"
import SignIn from "./instagram-app/SignIn";
import SignUp from "./instagram-app/SignUp";
import Home from "./instagram-app/Home";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="resturant" element={<Restaurant />} />
        <Route path="useState" element={<UseState />} />
        <Route path="useReducer" element={<UseReducer />} />
        <Route path="toDoList" element={<ToDoList />} />
        <Route path="instagram/signIn" element={<SignIn />} />
        <Route path="instagram/signUp" element={<SignUp />} />
        <Route path="instagram/home" element={<Home />} />        
      </Routes>
    </BrowserRouter>
  )
}

const Index = () => {
  return (
    <div className="container">
      <h1 className="text-center">
        🏡 Welcome to React Mini Projects List 🏠
      </h1>

      <ul class="list-group">
        <li class="list-group-item"><Link to="/resturant" className="nav-link text-orange">1. Restaurant Menu 😄</Link></li>
        <li class="list-group-item"><Link to="/useState" className="nav-link text-orange">2. Use State & Use Effect 😀</Link></li>
        <li class="list-group-item"><Link to="/useReducer" className="nav-link text-orange">3. Use Reducer 😀</Link></li>
        <li class="list-group-item"><Link to="/toDoList" className="nav-link text-orange">4. To Do List 😇</Link></li>
        <li class="list-group-item"><Link to="/instagram/signIn" className="nav-link text-orange">5. Instagram 😇</Link></li>
      </ul>
    </div>


  );
}

export default App
