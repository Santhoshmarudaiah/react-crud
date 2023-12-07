import "./style.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
<h1>Crud Operation</h1>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
