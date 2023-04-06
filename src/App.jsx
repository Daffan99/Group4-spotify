import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom/dist";
import { Route } from "react-router-dom";
import SideBar from "./component/sidebar";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/LoginPage";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import routes from "./routes/Routes";
function App() {
  return (
    <>
      <Routes>
        {routes.map((val) => val)}
        {/* <Route path="/" element={<HomePage user="loe" />}></Route>
      <Route path="login" element={<LoginPage />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
