import React from "react";
import { Box, Grid, Image } from "theme-ui";
import grid1 from "../image/grid1.jpg";
import grid2 from "../image/grid2.jpg";
import grid3 from "../image/grid3.jpg";

const Undergridsupport = () => {
  return (
    <>
      <Grid width={[128, 192]} F>
        <Image
          src={grid2}
          style={{
            margin: "0px 40px 10px 0px",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        />
        <Image
          src={grid1}
          style={{
            margin: "0px 40px 10px 0px",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        />
        <Image
          src={grid3}
          style={{
            margin: "0px 40px 10px 0px",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        />
      </Grid>
    </>
  );
};

export default Undergridsupport;
