import { Box, Container, Flex, IconButton } from "@chakra-ui/react";
import logo from "../assets/logo-white.png";
import love from "../assets/love.png";
import "../css/sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { AiFillPlusSquare } from "react-icons/ai";
import { MdOutlineDownloadForOffline } from "react-icons/md";

export default function SideBar() {
  return (
    <>
      <Box className="alas">
        <Container>
          <a href="#">
            <Flex>
              <img src={logo} alt="" />
            </Flex>
          </a>
        </Container>

        <Box className="home">
          <Container>
            <Flex>
              <IconButton
                variant={"link"}
                as={AiFillHome}
                color={"white"}
                cursor={"pointer"}
                padding={"5px"}
              ></IconButton>
              <center>
                <div style={{ color: "white" }}>Home</div>
              </center>
            </Flex>
          </Container>

          <Container>
            <Flex>
              <IconButton
                variant={"link"}
                as={FiSearch}
                color={"white"}
                cursor={"pointer"}
                padding={"5px"}
              ></IconButton>
              <div>Search</div>
            </Flex>
          </Container>

          <Container>
            <Flex>
              <IconButton
                variant={"link"}
                as={BiLibrary}
                color={"white"}
                cursor={"pointer"}
                padding={"5px"}
              ></IconButton>
              <div>Your Library</div>
            </Flex>
          </Container>
        </Box>

        <Box className="plylist">
          <Container>
            <Flex>
              <IconButton
                variant={"link"}
                as={AiFillPlusSquare}
                color={"white"}
                cursor={"pointer"}
                padding={"5px"}
              ></IconButton>
              <div>Create Playlist</div>
            </Flex>
          </Container>

          <Container>
            <Flex>
              <div className="love">
                <img src={love} alt="" id="imglove" />
              </div>
              <div>Liked Song</div>
            </Flex>
          </Container>
        </Box>
        <hr className="garis" style={{ width: "200px" }} />
        <br />
        <Box className="scrolsidebar">
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>

          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
          <Box w="200px" h="20px">
            <a href="#">Your Playlist</a>
          </Box>
        </Box>

        {/* <Box>
          <Container>
            <Flex>
              <IconButton
                variant={"link"}
                as={MdOutlineDownloadForOffline}
                color={"white"}
                cursor={"pointer"}
                padding={"5px"}
              ></IconButton>
              <div>Install App</div>
            </Flex>
          </Container>
        </Box> */}
      </Box>
    </>
  );
}
