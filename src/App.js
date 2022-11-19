import React, {useState} from "react";
import Navbar from "./components/Navbar";
import { CssBaseline, Grid, Button } from "@mui/material";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Video from "./components/Video";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PlayList from "./PlayList";

const App = () => {
   const [playListId, setPlayListId] = useState('');
   const [playListHide, setPlayListHide] = useState(true)
  return (

    <>
      <CssBaseline />
      <Navbar setPlayListHide={setPlayListHide}/>
      
      <Grid container marginTop={2} justifyContent="center">
      {
          playListHide && <Grid item sx={12} sm={12} marginBottom={2}>
            <Button onClick={()=>setPlayListHide(false)} variant="contained"><PlaylistPlayIcon/>Play List </Button>
          </Grid>
        }
        {!playListHide && <Grid item xs={12} sm={3}>
          <PlayList setPlayListId={setPlayListId} setPlayListHide={setPlayListHide}/>
        </Grid>}
        
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
