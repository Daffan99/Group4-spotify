import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import "../css/home.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth_types } from "../redux/types";

export default function Navbar() {
  const userSelector = useSelector((state) => state.auth);

  const nav = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    dispatch({ type: auth_types.logout });
    localStorage.removeItem("user");
    nav("/login");
  }

  return (
    <Box
      // paddingBlock={"241"}

      bgColor={"rgb(7, 7, 7)"}
      className="navbar"
      bg="#1c1c1c"
      w="100%"
      p={3}
      color="white"
      position={"fixed"}
      zIndex={1}
    >
      <Flex justifyContent={"space-evenly"} paddingLeft={"241px"} zIndex={"0"}>
        <Box>
          <IconButton bg={"#1c1c1c"} icon={<ArrowLeftIcon />} />
          <IconButton bg={"#1c1c1c"} icon={<ArrowRightIcon />} />
        </Box>
        <Box>
          <Button bg={"#1c1c1c"} borderRadius={"20px"}>
            Daftar
          </Button>
          <Button bg={"white"} color="black" borderRadius={"20px"}>
            Login
          </Button>
        </Box>
        <Box
          w="250px"
          h={"30px"}
          color={"black"}
          fontWeight={"bold"}
          bgColor="whitesmoke"
          onClick={logout}
          cursor={"pointer"}
          textAlign={"center"}
          borderRadius={"20px"}
        >
          {userSelector?.name}
        </Box>
      </Flex>
    </Box>

    // konten
  );
}
