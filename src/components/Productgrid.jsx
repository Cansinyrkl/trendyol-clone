import React from "react";
import { Grid, Image } from "theme-ui";
import bottomgrid1 from "../image/bottomgrid1.jpg";
import bottomgrid2 from "../image/bottomgrid2.jpg";
import bottomgrid3 from "../image/bottomgrid3.jpg";

const Productgrid = () => {
  return (
    <>
      <Grid width={[128, 192]}>
        <Image
          src={bottomgrid1}
          style={{
            margin: "0px 40px 10px 0px",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        />
        <Image
          src={bottomgrid2}
          style={{
            margin: "0px 40px 10px 0px",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        />
        <Image
          src={bottomgrid3}
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

export default Productgrid;
