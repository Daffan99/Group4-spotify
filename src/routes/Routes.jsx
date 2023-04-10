import { Route } from "react-router-dom";
import ProtectedPage from "./ProtectedPage";
import HomePage from "../pages/homepage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/registerPage";

const routes = [
  <Route
    path="/"
    element={
      <ProtectedPage guestOnly={false} needLogin={true}>
        <HomePage />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/login"
    element={
      <ProtectedPage guestOnly={true} needLogin={false}>
        <LoginPage />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/register"
    element={
      <ProtectedPage guestOnly={true} needLogin={false}>
        <RegisterPage />
      </ProtectedPage>
    }
  ></Route>,
];

export default routes;
