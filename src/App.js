import React, {useState} from "react";
import Navbar from "./components/Navbar";
import { CssBaseline, Grid, Button } from "@mui/material";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Video from "./components/Video";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PlayList from "./components/PlayList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LinearProgressBar from "./components/LinearProgressBar";
const App = () => {
   const [playListId, setPlayListId] = useState('');
   const [playListHide, setPlayListHide] = useState(true)
   const [progress, setProgress] = useState(true);
  return (

    <>
      <CssBaseline />
      <Navbar setPlayListHide={setPlayListHide}/>
      {progress && <LinearProgressBar/>}
      <Grid justifyContent="center" marginTop={2}>
      <Header/>
        </Grid>         
      <Grid container marginTop={2} justifyContent="start">
      {
          
          playListHide && <Grid item xs={3} sm={3} marginBottom={2} >
            <Button onClick={()=>setPlayListHide(false)} variant="contained" sx={{cursor:'pointer', display:'inline', width:'150px', textAlign:"center" }}><PlaylistPlayIcon/>Play List </Button>
          </Grid>
        }
        {!playListHide && <Grid item xs={12} sm={3} >
          <PlayList setPlayListId={setPlayListId} setPlayListHide={setPlayListHide}/>
        </Grid>}
        
        <Grid item xs={12} sm={9}>
          <Routes>
            <Route path="/" element={<Home playListId={playListId} setProgress={setProgress}/>} />
            <Route exact path="/video/:id" element={<Video />} />
          </Routes>
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
};

export default App;
