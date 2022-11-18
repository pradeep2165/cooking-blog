import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const Video = () => {
    const {id} = useParams()
    console.log(id);
    return (
    <Grid container>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Grid>
  );
};

export default Video;
