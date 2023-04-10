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
  Select,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
// import login from "../assets/login_button1.png";
import logo from "../assets/spotify-logo2.png";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { TbAlertCircleFilled } from "react-icons/tb";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth_types } from "../redux/types";
import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";

export default function RegisterPage() {
  YupPassword(Yup);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      email2: "",
      password: "",
      // password2: "",
      name: "",
      day: "",
      month: "",
      year: "",
      gender: "male",
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("you need to enter your email.")
        .email(
          "This email is invalid. Make sure it's written like example@email.com"
        ),

      email2: Yup.string()
        .required("You need to confirm your email.")
        .oneOf([Yup.ref("emai"), null], "The email addresses don't match."),

      password: Yup.string().min(8, "Your password is too short."),
      name: Yup.string().required("Enter a name for your profile."),
      day: Yup.number("Enter a valid day of the month")
        .moreThan(0, "Enter a valid day of the month")
        .lessThan(32, "Enter a valid day of the month"),

      month: Yup.string().required("Select your birth month."),

      year: Yup.number()
        .required("Enter a valid year")
        .moreThan(0, "Enter a valid year"),
    }),
  });

  // onSubmit: ()=>{
  //   const account = {formik.value}
  // }

  function inputHandler(event) {
    const { value, id } = event.target;
    formik.setFieldValue(id, value);
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

  const month = [
    { number: "1", name: "Januari" },
    { number: "2", name: "Februari" },
    { number: "3", name: "Maret" },
    { number: "4", name: "April" },
    { number: "5", name: "May" },
    { number: "6", name: "Juni" },
    { number: "7", name: "Juli" },
    { number: "8", name: "Agustus" },
    { number: "9", name: "September" },
    { number: "10", name: "Oktober" },
    { number: "11", name: "November" },
    { number: "12", name: "Desember" },
  ];

  return (
    <>
      <Center flexDir={"column"} w={"100vw"} gap={"10px"}>
        <Center
          w={"100%"}
          paddingTop={"25px"}
          paddingBottom={"22px"}
          // borderBottom={"1px solid #d9dadc"}
        >
          <Image src={logo} w="88px" h={"27px"} />
        </Center>
        <Center fontWeight={"700"} pt={"25px"} fontSize={"32px"} pb={"25px"}>
          Sign up for free to start listening{" "}
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
            w={"312px"}
            bgColor={"facebook.600"}
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
            Sing up with FACEBOOK
          </Center>
          {/* <Center
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
          </Center> */}
          <Center
            w={"312px"}
            bgColor={"white"}
            h={"48px"}
            borderRadius={"25px"}
            fontWeight={"700"}
            gap={"10px"}
            color={"#535353"}
            border={"3px solid #535353"}
            letterSpacing={"1.5px"}
            _hover={{ borderColor: "black" }}
          >
            <Icon w={"20px"} h={"20px"} as={FcGoogle}></Icon>
            Sing up with GOOGLE
          </Center>
          {/* <Center
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
          </Center> */}

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
              or
            </Box>
            <Center w={"100%"}>
              <Box h={"1.6px"} w={"100%"} bgColor={"#d9dadc"}></Box>
            </Center>
          </Center>
        </Center>
        <Box maxW={"450px"} w={"100%"} color={"black"} alignItems={"left"}>
          <Box fontWeight={"700"}>
            <Box paddingBottom={"8px"}>What's your email?</Box>

            <Input
              // onChange={(e) => formik.setFieldValue("email", e.target.value)}
              onChange={inputHandler}
              id="email"
              border={"1px solid #a5a5a5"}
              placeholder="Enter your email"
              height={"48px"}
              _hover={{ borderColor: "black" }}
            ></Input>
            <Flex
              color={"red"}
              gap={"5px"}
              display={formik.errors.email ? "flex" : "none"}
            >
              <Center>
                <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
              </Center>
              {formik.errors.email}
              {/* your need to enter your email */}
            </Flex>
            <Box color={"green"} textDecoration={"underline"} pb={"24px"}>
              use phone number instead
            </Box>
          </Box>

          <Box fontWeight={"700"}>
            <Box paddingBottom={"8px"}>Comfirm your email?</Box>

            <Input
              onChange={inputHandler}
              id="email2"
              border={"1px solid #a5a5a5"}
              placeholder="Enter your email again."
              height={"48px"}
              _hover={{ borderColor: "black" }}
            ></Input>
            <Flex
              color={"red"}
              gap={"5px"}
              display={formik.errors.email2 ? "flex" : "none"}
            >
              <Center>
                <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
              </Center>
              {formik.errors.email2}
              {/* your need to comfirm your email */}
            </Flex>
          </Box>

          <Flex flexDir={"column"} gap={"2px"}>
            <Box paddingTop={"20px"} fontWeight={"bold"}>
              Create a password
            </Box>

            <InputGroup pb={"24px"}>
              <Input
                onChange={inputHandler}
                id="password"
                h={"48px"}
                placeholder="Create a password"
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
            <Flex
              color={"red"}
              gap={"5px"}
              paddingBottom={"24px"}
              fontWeight={"bold"}
              display={formik.errors.password ? "flex" : "none"}
            >
              <Center>
                <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
              </Center>
              {formik.errors.password}
            </Flex>
          </Flex>

          <Box fontWeight={"700"}>
            <Box paddingBottom={"8px"}>What should we call you?</Box>

            <Input
              onChange={inputHandler}
              id="name"
              border={"1px solid #a5a5a5"}
              placeholder="Enter your email again."
              height={"48px"}
              _hover={{ borderColor: "black" }}
            ></Input>
            <Flex
              color={"red"}
              gap={"5px"}
              display={formik.errors.name ? "flex" : "none"}
            >
              <Center>
                <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
              </Center>
              {formik.errors.name}
            </Flex>
            <Box>This appears on your profile</Box>
          </Box>

          <Box
            fontWeight={"700px"}
            maxW={"450px"}
            w={"100%"}
            paddingTop={"24px"}
          >
            <Box paddingBottom={"8px"}>What't your date of birth?</Box>
            <Flex justifyContent={"space-between"} gap={"20px"} h={"48px"}>
              <Input
                maxW={"80px"}
                w={"100%"}
                h={"100%"}
                onChange={inputHandler}
                id="day"
                placeholder="DD"
                _hover={{ borderColor: "black" }}
              ></Input>

              {/* <Input
                maxW={"80px"}
                w={"100%"}
                onChange={inputHandler}
                id="day"
                placeholder="DD"
              ></Input> */}

              <Select
                h={"48px"}
                placeholder="Month"
                id="month"
                _hover={{ borderColor: "black" }}
              >
                {month.map((val) => (
                  <option value={val.number}> {val.name}</option>
                ))}
              </Select>

              <Input
                maxW={"80px"}
                w={"100%"}
                h={"100%"}
                onChange={inputHandler}
                id="year"
                placeholder="yyyy"
                _hover={{ borderColor: "black" }}
              ></Input>
            </Flex>
          </Box>

          <Flex
            color={"red"}
            gap={"5px"}
            display={formik.errors.day ? "flex" : "none"}
          >
            <Center>
              <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
            </Center>
            {formik.errors.day}
          </Flex>

          <Flex
            color={"red"}
            gap={"5px"}
            display={formik.errors.month ? "flex" : "none"}
          >
            <Center>
              <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
            </Center>
            {formik.errors.month}
          </Flex>

          <Flex
            color={"red"}
            gap={"5px"}
            display={formik.errors.year ? "flex" : "none"}
          >
            <Center>
              <Icon as={TbAlertCircleFilled} w={"16px"} h={"16px"} />
            </Center>
            {formik.errors.year}
          </Flex>

          <Flex flexDir={"column"} gap={"5px"} paddingTop={"24px"} pb={"24px"}>
            <Box fontWeight={"700px"}> What's your gender?</Box>
            <RadioGroup defaultValue="male">
              <Flex
                w="100%"
                flexWrap={"wrap"}
                rowGap={"10px"}
                columnGap={"20px"}
              >
                <Radio
                  colorScheme="green"
                  value="male"
                  border={"1px solid green"}
                ></Radio>
                Male
                <Radio
                  colorScheme="green"
                  value="female"
                  border={"1px solid green"}
                ></Radio>
                Female
                <Radio
                  colorScheme="green"
                  value="nonbinari"
                  border={"1px solid green"}
                ></Radio>
                Non-Binari
                <Radio
                  colorScheme="green"
                  value="other"
                  border={"1px solid green"}
                ></Radio>
                Other
              </Flex>
              <Flex
                w="100%"
                flexWrap={"wrap"}
                rowGap={"10px"}
                columnGap={"20px"}
              >
                <Radio
                  colorScheme="green"
                  value="prefer"
                  border={"1px solid green"}
                ></Radio>
                Prefer not to say
              </Flex>
            </RadioGroup>
          </Flex>

          <Flex
            h="48px"
            fontSize={"14px"}
            alignItems={"flex-start"}
            pt={"10px"}
            pb={"10px"}
            flexDir={"row"}
            gap={"5px"}
            // justifyContent={'space-around'}
          >
            <Checkbox
              h="100%"
              alignItems={"flex-start"}
              colorScheme="green"
              // border={"1px solid green"}
              id="marketAgree"
            ></Checkbox>
            <Box h="100%" pb={"24px"}>
              <label htmlFor="marketAgree">
                {" "}
                I would prefer not to receive marketing messege from spotify{" "}
              </label>
            </Box>
          </Flex>

          <Flex
            h="48px"
            fontSize={"14px"}
            alignItems={"flex-start"}
            pt={"10px"}
            pb={"10px"}
            flexDir={"row"}
            gap={"5px"}
            // justifyContent={'space-around'}
          >
            <Checkbox
              h="100%"
              alignItems={"flex-start"}
              colorScheme="green"
              // border={"1px solid green"}
              id="shareAgree"
            ></Checkbox>
            <Box h="100%">
              <label htmlFor="shareAgree">
                {" "}
                Share my regitration data with Sppotify's content providers for
                marketing pusposes{" "}
              </label>
            </Box>
          </Flex>

          <Flex
            h={"48px"}
            flexDir={"row"}
            justifyContent={"center"}
            pt={"24px"}
          >
            <Center fontSize={"14px"} gap="5px">
              <Box>By clicking on sign-up, you agree to spotify</Box>
              <Box color="green" textDecoration="underline">
                Term and Condition of use
              </Box>
            </Center>
          </Flex>

          <Flex h={"48px"} flexDir={"row"} justifyContent={"center"}>
            <Center fontSize={"14px"} gap="5px">
              <Box>By clicking on sign-up, you agree to the </Box>
              <Box color="green" textDecor={"underline"}>
                Spotify Privasy Police
              </Box>
            </Center>
          </Flex>

          <Box height={"48px"} display={"flex"} justifyContent={"center"}>
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
                // onClick={}
              >
                <a href="#"> SIGN UP </a>
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
        ></Box>
        {/* <Box height={"1.6px"} w={"100%"} bgColor={"#d9dadc"} />
        </Box> */}
        <Center
          maxW={"450px"}
          w={"100%"}
          flexDir={"column"}
          paddingBottom={"10px"}
        >
          <Flex
            fontSize={"14px"}
            paddingBottom={"20px"}
            fontWeight={"700"}
            flexDir={"row"}
            justifyContent={"center"}
            gap={"5px"}
          >
            <Box> Have an account? </Box>
            <Box color={"green"} textDecor={"underline"}>
              <Link to={"/login"}>Log in</Link>
            </Box>
          </Flex>
          {/* <Center
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
          </Center> */}
        </Center>
      </Center>
    </>
  );
}
