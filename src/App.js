import React, {useState} from "react";
import Navbar from "./components/Navbar";
import { CssBaseline, Grid } from "@mui/material";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Video from "./components/Video";
import PlayList from "./PlayList";
const App = () => {
   const [playListId, setPlayListId] = useState('');
  return (

    <>
      <CssBaseline />
      <Navbar />
      <Grid container marginTop={2} justifyContent="center">
        <Grid item xs={12} sm={3}>
          <PlayList setPlayListId={setPlayListId}/>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Routes>
            <Route path="/" element={<Home playListId={playListId}/>} />
            <Route exact path="/video/:id" element={<Video />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
