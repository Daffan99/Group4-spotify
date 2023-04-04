import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import "../css/home.css";

export default function Navbar() {
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
      <Flex justifyContent={"space-between"} paddingLeft={"241px"} zIndex={"0"}>
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
      </Flex>
    </Box>

    // konten
  );
}
