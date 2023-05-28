import React from "react";
import Topbar from "../components/Topbar";
import { Box } from "theme-ui";
import Undertoptitle from "../components/Undertoptitle";
import Undergridsupport from "../components/Undergridsupport";

const Home = () => {
  return (
    <Box>
      <Topbar />
      <Undertoptitle />
      <Undergridsupport />
    </Box>
  );
};

export default Home;
