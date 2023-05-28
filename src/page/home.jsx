import React from "react";
import Topbar from "../components/Topbar";
import { Box } from "theme-ui";
import Undertoptitle from "../components/Undertoptitle";
import Undergridsupport from "../components/Undergridsupport";
import Productgrid from "../components/Productgrid";
import Brandtitle from "../components/Brandtitle";
import Bestsellingproducts from "../components/Bestsellingproducts";

const Home = () => {
  return (
    <Box>
      <Topbar />
      <Undertoptitle />
      <Undergridsupport />
      <Productgrid />
      <Brandtitle />
      <Bestsellingproducts />
    </Box>
  );
};

export default Home;
