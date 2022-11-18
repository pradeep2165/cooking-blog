import React from "react";
import Navbar from "./components/Navbar";
import { CssBaseline, Grid } from "@mui/material";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Video from "./components/Video";
import PlayList from "./PlayList";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";

const App = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Grid container marginTop={2} justifyContent="center">
        <Grid item xs={12} sm={3} >
          {/* <Item> */}
            <PlayList />
          {/* </Item> */}
        </Grid> 
        <Grid item xs={12} sm={9}>
          {/* <Item> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/video/:id" element={<Video />} />
            </Routes>
          {/* </Item> */}
        </Grid>
      </Grid>
    </>
  );
};

export default App;
