import Restaurant from "./Restaurant/Restaurant"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="resturant" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  )
}

const Index = () => {
  return (
    <div className="container">
      <h1 className="text-center">Welcome to React Mini Projects List</h1>

      <ul class="list-group">
        <li class="list-group-item"><Link to="/resturant" className="nav-link text-orange">1. Restaurant Menu</Link></li>
      </ul>
    </div>


  );
}

export default App
