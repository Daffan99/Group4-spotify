import "../css/login.css";
import {
  Box,
  Flex,
  Image,
  Icon,
  Center,
  Input,
  Checkbox,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
// import login from "../assets/login_button1.png";
import logo from "../assets/spotify-logo2.png";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { TbAlertCircleFilled } from "react-icons/tb";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth_types } from "../redux/types";

export default function LoginPage() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  function inputHandler(event) {
    const { value, id } = event.target;
    const tempAccount = { ...account };
    tempAccount[id] = value;
    setAccount(tempAccount);
  }

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user?.email) {
  //     nav("/");
  //   }
  // });

  useEffect(() => {
    console.log("ada yang baru nih");
  }, [account.password]);

  function login() {
    if (account.email && account.password) {
      dispatch({
        type: auth_types.login,
        payload: account,
      });
    } else {
      alert("Email dan password wajib diisi ya bro...!!");
    }

    localStorage.setItem("user", JSON.stringify(account));

    nav("/login");
  }

  const [seePassword, setSeePassword] = useState(false);

  return (
    <>
      <Center flexDir={"column"} w={"100vw"} gap={"10px"}>
        <Center
          w={"100%"}
          paddingTop={"25px"}
          paddingBottom={"22px"}
          borderBottom={"1px solid #d9dadc"}
        >
          <Image src={logo} w="143px" h={"44px"} />
        </Center>
        <Center fontWeight={"700"} pt={"25px"}>
          To continue, log in to Spotify
        </Center>
        <Center
          w={"100%"}
          maxW={"450px"}
          fontSize={"14px"}
          color={"white"}
          flexDir={"column"}
          gap={"10px"}
        >
          <Center
            w={"100%"}
            bgColor={"#1877F2"}
            h={"48px"}
            borderRadius={"25px"}
            fontWeight={"700"}
            gap={"10px"}
            color={"whiteAlpha.800"}
            letterSpacing={"1.5px"}
            border={"1px solid #1877f2"}
            _hover={{ borderColor: "black" }}
          >
            <Icon w={"20px"} h={"20px"} as={BsFacebook}></Icon>
            CONTINUE WITH FACEBOOK
          </Center>
          <Center
            w={"100%"}
            bgColor={"#191919"}
            h={"48px"}
            borderRadius={"25px"}
            fontWeight={"700"}
            gap={"10px"}
            color={"whiteAlpha.800"}
            letterSpacing={"1.5px"}
            border={"1px solid #191919"}
            _hover={{ borderColor: "black" }}
          >
            <Icon w={"20px"} h={"20px"} as={BsApple}></Icon>
            CONTINUE WITH APPLE
          </Center>
          <Center
            w={"100%"}
            bgColor={"white"}
            h={"48px"}
            borderRadius={"25px"}
            fontWeight={"700"}
            gap={"10px"}
            color={"#6a6a6a"}
            border={"1px solid #A5a5a5"}
            letterSpacing={"1.5px"}
            _hover={{ borderColor: "black" }}
          >
            <Icon w={"20px"} h={"20px"} as={FcGoogle}></Icon>
            CONTINUE WITH GOOGLE
          </Center>
          <Center
            w={"100%"}
            bgColor={"white"}
            h={"48px"}
            borderRadius={"25px"}
            fontWeight={"700"}
            gap={"10px"}
            color={"#6a6a6a"}
            border={"1px solid #A5a5a5"}
            letterSpacing={"1.5px"}
            _hover={{ borderColor: "black" }}
          >
            CONTINUE WITH PHONE NUMBER
          </Center>

          <Center
            w={"100%"}
            h={"48px"}
            color={"black"}
            gap={"20px"}
            fontWeight={"800"}
            paddingBottom={"12px"}
          >
            <Center w={"100%"}>
              <Box h={"1.6px"} w={"100%"} bgColor={"#d9dadc"}></Box>
            </Center>
            <Box height={"38px"} paddingTop={"13px"}>
              OR
            </Box>
            <Center w={"100%"}>
              <Box h={"1.6px"} w={"100%"} bgColor={"#d9dadc"}></Box>
            </Center>
          </Center>
        </Center>
        <Box maxW={"450px"} w={"100%"} color={"black"} alignItems={"left"}>
          <Box fontWeight={"700"}>
            <Box paddingBottom={"8px"}>Email address or username</Box>

            <Input
              onChange={inputHandler}
              id="email"
              border={"1px solid #a5a5a5"}
              placeholder="Email address or username"
              height={"48px"}
              _hover={{ borderColor: "black" }}
            ></Input>
          </Box>

          <Flex flexDir={"column"} gap={"2px"}>
            <Box paddingTop={"20px"} fontWeight={"bold"}>
              Password
            </Box>

            <InputGroup>
              <Input
                onChange={inputHandler}
                id="password"
                h={"48px"}
                placeholder="Password"
                type={seePassword ? "text" : "password"}
                border={"1px solid #a5a5a5"}
              ></Input>
              <InputRightElement h="48px">
                <Icon
                  alignContent={"center"}
                  color={"grey"}
                  as={seePassword ? AiOutlineEye : AiOutlineEyeInvisible}
                  w="24px"
                  h="24px"
                  cursor={"pointer"}
                  onClick={() => setSeePassword(!seePassword)}
                ></Icon>
              </InputRightElement>
            </InputGroup>
            {account?.password.length < 8 ? (
              <Box color={"red"}>Password Minimal 8 digit</Box>
            ) : null}
          </Flex>

          {/* <Box
              display={"flex"}
              justifyContent={"right"}
              alignItems={"center"}
              h="48px"
              w="450px"
              position={"absolute"}
            >
              <Icon
                paddingRight={"5px"}
                w={"30px"}
                h={"30px"}
                as={AiFillEyeInvisible}
                position={"absolute"}
              ></Icon>
            </Box> */}

          {/* <Box display={"flex"}>
              <Input
                border={"1px solid #a5a5a5"}
                // outline={"0px"}
                h={"100%"}
                placeholder="Password"
                height={"48px"}
                _hover={{ borderColor: "black" }}
              ></Input>
            </Box> */}

          <Box
            width={"180px"}
            fontSize={"16px"}
            fontWeight={"bold"}
            textDecor={"underline"}
            paddingTop={"20px"}
            paddingBottom={"16px"}
            _hover={{ color: "#117a37" }}
            cursor={"pointer"}
          >
            Forgot your password?
          </Box>
          <Box
            height={"48px"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box maxW={"144px"} w={"100%"} height={"48px"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                fontSize={"14px"}
              >
                <Box h="16px" w="16px" borderRadius={"3px"}>
                  <Checkbox colorScheme="green" id="check" />
                </Box>
                <label htmlFor="check">Remember me</label>
              </Box>
            </Box>
            <Box
              w={"121px"}
              h={"48px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Flex
                w={"100%"}
                bgColor={"#1ed760"}
                h={"48px"}
                borderRadius={"25px"}
                fontWeight={"700"}
                gap={"10px"}
                color={"black"}
                fontSize={"14px"}
                border={"1px solid #A5a5a5"}
                justifyContent={"center"}
                alignItems={"center"}
                letterSpacing={"1.5px"}
                onClick={login}
              >
                <a href="#"> LOG IN </a>
              </Flex>
              <Flex
                w={"123px"}
                bgColor={"#1fdf64"}
                h={"50px"}
                borderRadius={"25px"}
                fontWeight={"700"}
                gap={"10px"}
                color={"black"}
                fontSize={"15px"}
                border={"1px solid #A5a5a5"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"absolute"}
                opacity={"0"}
                letterSpacing={"1.5px"}
                _hover={{ opacity: "1" }}
                onClick={login}
              >
                LOG IN
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box
          w={"100%"}
          maxW={"450px"}
          paddingTop={"12px"}
          paddingBottom={"20px"}
        >
          <Box height={"1.6px"} w={"100%"} bgColor={"#d9dadc"} />
        </Box>
        <Center
          maxW={"450px"}
          w={"100%"}
          flexDir={"column"}
          paddingBottom={"10px"}
        >
          <Center fontSize={"18px"} paddingBottom={"20px"} fontWeight={"700"}>
            Don't have an account?
          </Center>
          <Center
            w={"100%"}
            bgColor={"white"}
            h={"48px"}
            borderRadius={"25px"}
            fontWeight={"700"}
            // gap={"10px"}
            color={"#6a6a6a"}
            border={"1px solid #A5a5a5"}
            letterSpacing={"1.5px"}
            _hover={{ borderColor: "black" }}
          >
            SIGN UP FOR SPOTIFY
          </Center>
        </Center>
      </Center>
    </>
  );
}
