import React from "react";
import Topbar from "../components/Topbar";
import { Flex } from "theme-ui";
import Undertopbar from "../components/Undertopbar";

const Home = () => {
  return (
    <Flex sx={{ flexDirection: "row" }}>
      <Topbar />
      <Undertopbar />
    </Flex>
  );
};

export default Home;
