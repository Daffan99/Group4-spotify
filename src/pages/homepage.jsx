import MainPage from "../component/main.jsx";
import Kertas from "../component/konten";
import Navbar from "../component/navbar";
import SideBar from "../component/sidebar";
import "../css/home.css";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <SideBar />
      <Kertas />
    </>
  );
}
