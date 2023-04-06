import MainPage from "../component/main.jsx";
import Kertas from "../component/konten";
import Navbar from "../component/navbar";
import SideBar from "../component/sidebar";
import "../css/home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function HomePage(props) {
  const [loading, setLoading] = useState(true);
  const userSelector = useSelector((state) => state.auth);
  let nav = useNavigate();

  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("user"));

    setTimeout(() => setLoading(false), 1000);
    // if (!user?.email || !user?.password) {
    //   nav("/login");
    // }
  }, []);

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));

  //   setTimeout(() => setLoading(false), 1000);
  //   if (user?.email) {
  //     nav("/");
  //   }
  // }, []);

  return (
    <>
      {loading ? (
        <Center height={"100vh"}>
          <Spinner color="red" size={"xl"} />
        </Center>
      ) : (
        <>
          <Navbar />
          <SideBar />
          <Kertas />
        </>
      )}
    </>
  );
}
