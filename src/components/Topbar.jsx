import React from "react";
import { Flex, Input, Image, Button, Box } from "theme-ui";
import trendyol from "../image/trendyol.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <>
      <Flex sx={{ alignItems: "center" }}>
        <Image
          src={trendyol}
          width="160"
          height="80"
          style={{ margin: "0px 40px 10px 0px", cursor: "pointer" }}
        />
        <Input
          placeholder="Aradığınız ürün, kategori veya markayı yazınız"
          sx={{
            backgroundColor: "#f3f3f3",
            border: "none",
            height: 42,
            width: 600,
          }}
        />
        <Box sx={{ margin: "0px 40px" }}>
          <Button
            sx={{
              color: "black",
              backgroundColor: "transparent",
              cursor: "pointer",
              fontSize: 14,
              "&:hover": {
                color: "#ff4e01",
              },
            }}
          >
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "black", marginRight: "6px" }}
            />
            Giriş
          </Button>
          <Button
            sx={{
              color: "black",
              backgroundColor: "transparent",
              cursor: "pointer",
              fontSize: 14,
              "&:hover": {
                color: "#ff4e01",
              },
            }}
          >
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "black", marginRight: "6px" }}
            />
            Favorilerim
          </Button>
          <Button
            sx={{
              color: "black",
              backgroundColor: "transparent",
              cursor: "pointer",
              fontSize: 14,
              "&:hover": {
                color: "#ff4e01",
              },
            }}
          >
            <FontAwesomeIcon
              icon={faShoppingBag}
              style={{ color: "black", marginRight: "6px" }}
            />
            Sepetim
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Topbar;
