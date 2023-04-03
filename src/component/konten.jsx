import { Button, Box, Container, Flex, ring } from "@chakra-ui/react";
import "../css/home.css";

export default function Kertas() {
  const data = [
    {
      url: "https://upload.wikimedia.org/wikipedia/id/2/2b/Yoasobi_-_The_Book.jpg",
      judul: "The Book",
      desc: "2021 - Album",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/en/d/dc/Yoasobi_-_The_Book_2.jpg",
      judul: "The Book 2",
      desc: "2021 - Album",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/en/2/20/Yoasobi_-_E-Side.jpeg",
      judul: "E-SIDE",
      desc: "2021 - Album",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/en/6/6d/Yoasobi_-_E-Side_2.png",
      judul: "E-SIDE",
      desc: "2022 - Album",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/en/9/93/Yoru_ni_Kakeru_cover_art.jpg",
      judul: "夜に駆ける",
      desc: "2019 - Single",
    },
    {
      url: "https://t2.genius.com/unsafe/409x409/https%3A%2F%2Fimages.genius.com%2F17f2e3fa1692719bbb588d9c6d2f5ca3.1000x1000x1.png",
      judul: "祝福",
      desc: "2022 - Single",
    },
  ];

  const data1 = [
    {
      url: "http://www.pianoramix.com/assets/media/298-peaceful-piano-spotify-300x300r.jpeg",
      judul: "Piaceful Piano",
      desc: "Relax and indulge with beautiful piano pieces",
    },
    {
      url: "http://www.pianoramix.com/assets/media/298-peaceful-piano-spotify-300x300r.jpeg",
      judul: "Piaceful Piano",
      desc: "Relax and indulge with beautiful piano pieces",
    },
    {
      url: "http://www.pianoramix.com/assets/media/298-peaceful-piano-spotify-300x300r.jpeg",
      judul: "Piaceful Piano",
      desc: "Relax and indulge with beautiful piano pieces",
    },
    {
      url: "http://www.pianoramix.com/assets/media/298-peaceful-piano-spotify-300x300r.jpeg",
      judul: "Piaceful Piano",
      desc: "Relax and indulge with beautiful piano pieces",
    },
  ];

  return (
    // <Box width="100%" bgColor="green" height="100vh">
    <Box
      width={"100%"}
      bg={"black"}
      // marginLeft={"241px"}
      height={"100vh - 90px"}
      p={" 20px 20px"}
    >
      {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
      <Flex
        // bg="red"
        // marginBottom={"100px"}
        paddingLeft={"241px"}
        height={"390px"}
        flexDir={"column"}
      >
        <Box
          className="title"
          height={"50px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box
            color={"white"}
            className="title1"
            display={"flex"}
            alignItems={"center"}
          >
            YOASOBI
          </Box>
          <Box
            color={"white"}
            className="title2"
            display={"flex"}
            alignItems={"center"}
          >
            Show all
          </Box>
        </Box>

        <Flex
          // justifyContent={"space-between"}

          alignItems={"center"}
          h="100%"
          // height={"500px"}

          // bgColor={"red"}
          gap={"20px"}
          // padding={"20px"}
        >
          {data.map((val) => (
            <Card url={val.url} judul={val.judul} desc={val.desc} />
          ))}
        </Flex>
      </Flex>
      {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
      <Flex
        // bg="red"
        // marginBottom={"100px"}
        paddingLeft={"241px"}
        height={"390px"}
        flexDir={"column"}
      >
        <Box
          className="title"
          height={"50px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box
            color={"white"}
            className="title1"
            display={"flex"}
            alignItems={"center"}
          >
            YOASOBI
          </Box>
          <Box
            color={"white"}
            className="title2"
            display={"flex"}
            alignItems={"center"}
          >
            Show all
          </Box>
        </Box>

        <Flex
          // justifyContent={"space-between"}
          alignItems={"center"}
          h="100%"
          // height={"500px"}

          // bgColor={"red"}
          gap={"20px"}
          // padding={"20px"}
        >
          {data1.map((val) => (
            <Card url={val.url} judul={val.judul} desc={val.desc} />
          ))}
        </Flex>
      </Flex>
      {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
    </Box>
    // </Box>
  );
}

function Card(props) {
  return (
    <Box
      className="card"
      // bg={"pink"}
      width={"205px"}
      height={"310px"}
      padding={"10px"}
      borderRadius={"5px"}
    >
      <Box mw={"185px"}>
        <img src={props.url} alt="cover" width={"100%"} height={"100%"} />
      </Box>
      <Box h="20px"> </Box>
      <Box color="white" height={"30px"} className="judul">
        {props.judul}
      </Box>
      <Box color={"white"} height={"50px"} className="desc">
        {props.desc}
      </Box>
    </Box>
  );
}

// import { Box, Center, Flex } from "@chakra-ui/react";
// import { Text } from "@chakra-ui/react";

// export default function Kertas() {
//   return (
//     <Box bg="red" h="1000px" w="100%" p={4} color="white">
//       <Box w="1353px" h="327px">
//         <Flex justifyContent={"space-between"}>
//           <Text fontSize="4xl">Focus</Text>
//           <Text fontSize="4xl">Tampilkan Semua</Text>
//         </Flex>

//         <Flex justifyContent={"space-between"}>
//           <Box bg="black" h="273px" w="183px"></Box>
//           <Box bg="black" h="273px" w="183px"></Box>
//           <Box bg="black" h="273px" w="183px"></Box>
//           <Box bg="black" h="273px" w="183px"></Box>
//           <Box bg="black" h="273px" w="183px"></Box>
//           <Box bg="black" h="273px" w="183px"></Box>
//         </Flex>
//       </Box>
//       {/*  */}
//       <Box w="1353px" h="327px">
//         <Flex justifyContent={"space-between"}>
//           <Text fontSize="4xl">Playlist Spotify</Text>
//           <Text fontSize="4xl">Tampilkan Semua</Text>
//         </Flex>

//         <Flex justifyContent={"space-between"}>
//           <Box bg="black" h="273px" w="183px"></Box>
//           <Box bg="black" h="273px" w="183px"></Box>
//           <Box bg="black" h="273px" w="183px"></Box>
//           <Box bg="black" h="273px" w="183px"></Box>
//           <Box bg="black" h="273px" w="183px"></Box>
//           <Box bg="black" h="273px" w="183px"></Box>
//         </Flex>
//       </Box>
//     </Box>
//   );
// }
