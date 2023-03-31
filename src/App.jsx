import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom/dist";
import { Route } from "react-router-dom";
import SideBar from "./component/sidebar";

function App() {
  return (
    <Routes>
      <Route path="sidebar" element={<SideBar />}></Route>
    </Routes>
  );
}

export default App;
