import React from "react";
import Topbar from "../components/Topbar";
import { Box, Flex } from "theme-ui";
import Undertopbar from "../components/Undertopbar";

const Home = () => {
  return (
    <Box>
      <Topbar />
      <Undertopbar />
    </Box>
  );
};

export default Home;
