import React from "react";
import { CardMedia, Stack } from "@mui/material";
import image from "../images/Cook@Home.png";
const Header = () => {
  return (
    <Stack > 
      <CardMedia component="img" image={image} alt="green iguana" sx={{position:"sticky", zIndex:-1, height:300 }}/>
    </Stack>
  );
};

export default Header;
