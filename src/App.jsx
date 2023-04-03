import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom/dist";
import { Route } from "react-router-dom";
import SideBar from "./component/sidebar";
import HomePage from "./pages/homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
