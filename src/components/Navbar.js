import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CardHeader, Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <img src="https://yt3.ggpht.com/tD18w9CyzB-SxI4vwkx4HYlvLnNjBCisMk86DGPf7n5SRlMO1AjR6pszWBLYf_4le_G-tO0d1LA=s900-c-k-c0x00ffffff-no-rj" alt="" height={50} width={50} />
              </Avatar>
            }
          ></CardHeader>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CookWithBharati
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
