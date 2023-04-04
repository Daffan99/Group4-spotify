import {
  Box,
  Flex,
  Image,
  Icon,
  Center,
  Input,
  Checkbox,
  Show,
  Button,
} from "@chakra-ui/react";
import logo from "../assets/spotify-logo2.png";
import { BsApple, BsFacebook, BsGoogle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
// import { ViewIcon } from "react-icons/vi";
import { TbAlertCircleFilled } from "react-icons/tb";
export default function LoginPage() {
  return (
    <>
      <Center
        pb={"12px"}
        pt={"25px"}
        flexDir={"column"}
        gap={"40px"}
        borderBottom={"1px solid #d9dadc"}
      >
        <Image src={logo} w={"143px"} h={"44px"} />
      </Center>
      <Center flexDir={"column"} pt="40px">
        <Center
          flexDir={"column"}
          gap={"10px"}
          w="100%"
          maxW={"450px"}
          fontSize={"14px"}
          color={"white"}
        >
          <Center
            w="100%"
            bgColor={"#4e6eb3"}
            h="48px"
            fontWeight={"bold"}
            borderRadius={"25px"}
            gap="10px"
          >
            <Icon w="20px" h="20px" as={BsFacebook}></Icon>
            CONTINUE WITH FACEBOOK
          </Center>

          <Center
            w="100%"
            bgColor={"black"}
            h="48px"
            fontWeight={"bold"}
            borderRadius={"25px"}
            gap="10px"
            color={"whiteAlpha.800"}
          >
            <Icon w="20px" h="20px" as={BsApple}></Icon>
            CONTINUE WITH APPLE
          </Center>

          <Center
            w="100%"
            // bgColor={"#1877f2"}
            h="48px"
            fontWeight={"bold"}
            borderRadius={"25px"}
            gap="10px"
            color={"blackAlpha.500"}
            border={"1px solid grey"}
          >
            <Icon w="20px" h="20px" as={FcGoogle}></Icon>
            CONTINUE WITH GOOGLE
          </Center>

          <Center
            w="100%"
            // bgColor={"#1877f2"}
            h="48px"
            fontWeight={"bold"}
            borderRadius={"25px"}
            gap="10px"
            color={"blackAlpha.500"}
            border={"1px solid grey"}
          >
            {/* <Icon w="20px" h="20px" as={BsGoogle}></Icon> */}
            CONTINUE WITH PHONE NUMBER
          </Center>

          <Center
            w="100%"
            h="48px"
            gap="12px"
            color="black"
            fontWeight={"bold"}
          >
            <Center w="100%">
              <Box h="1px" w="100%" bgColor={"#d9dadc"}></Box>
            </Center>
            OR
            <Center w="100%">
              <Box h="1px" w="100%" bgColor={"#d9dadc"}></Box>
            </Center>
          </Center>

          <Flex
            pt="20px"
            flexDir={"column"}
            width={"100%"}
            gap={"20px"}
            color={"Black"}
            fontWeight={"bolder"}
          >
            <Flex flexDir={"column"}>
              <Box fontWeight={"bolder"} height={"30px"} color={"black"}>
                {" "}
                Emain Address Or Username{" "}
              </Box>
              <Input
                placeholder="Emain Address Or Username"
                border={"1px solid grey"}
                width={"100%"}
              ></Input>
            </Flex>

            <Flex flexDir={"column"}>
              <Box fontWeight={"bolder"} height={"30px"} color={"black"}>
                {" "}
                Password
              </Box>
              <Flex>
                <Input
                  type={"password"}
                  placeholder="Password"
                  border={"1px solid grey"}
                  width={"100%"}
                >
                  {/* <Icon w="20px" h="20px" as={ViewIcon}></Icon> */}
                </Input>
              </Flex>
            </Flex>

            <Flex flexDir={"column"} gap={"5px"}>
              <Box
                fontWeight={"bolder"}
                height={"30px"}
                color={"black"}
                textDecoration={"underline"}
              >
                Forgot Password
              </Box>
            </Flex>
          </Flex>
        </Center>
      </Center>
    </>
  );
}
