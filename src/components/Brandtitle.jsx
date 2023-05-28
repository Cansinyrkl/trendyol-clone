import React from "react";
import { Grid, Image } from "theme-ui";
import brandtitle1 from "../image/brandtitle1.jpg";
import brandtitle2 from "../image/brandtitle2.jpg";
import brandtitle3 from "../image/brandtitle3.jpg";
import brandtitle4 from "../image/brandtitle4.jpg";
import brandtitle5 from "../image/brandtitle5.jpg";
import brandtitle6 from "../image/brandtitle6.jpg";

const Brandtitle = () => {
  return (
    <Grid width={[350]} sx={{ marginTop: "30px" }}>
      <Image
        src={brandtitle1}
        style={{
          margin: "0px 40px 10px 0px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      />
      <Image
        src={brandtitle2}
        style={{
          margin: "0px 40px 10px 0px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      />
      <Image
        src={brandtitle3}
        style={{
          margin: "0px 40px 10px 0px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      />
      <Image
        src={brandtitle4}
        style={{
          margin: "0px 40px 10px 0px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      />
      <Image
        src={brandtitle5}
        style={{
          margin: "0px 40px 10px 0px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      />
      <Image
        src={brandtitle6}
        style={{
          margin: "0px 40px 10px 0px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      />
    </Grid>
  );
};

export default Brandtitle;
