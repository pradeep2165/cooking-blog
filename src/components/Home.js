import * as React from "react";
import {Grid, Typography} from "@mui/material";
import VCard from "./VCard";
import { getVideoData, getPlayListVideoData } from "../api/getVideoData";
import { rowData } from "./ds";



export default function Home({ playListId, setProgress }) {
  const [data, setData] = React.useState(rowData);
  const contents = data.contents;

  React.useEffect(() => {
    setProgress(true);
    getVideoData().then((videoData) => {
      setData(videoData); 
      setProgress(false);
    });
    // eslint-disable-next-line
  }, []);
  React.useEffect(() => {
    if (playListId) {
      setProgress(true);
      getPlayListVideoData(playListId).then((videoData) => {setData(videoData); setProgress(false);});
    }
    // eslint-disable-next-line
  }, [playListId]);
  console.log(data);
  return (
    <Grid>
{playListId && <Typography variant="h4" textAlign="center" component='h2'>{data?.title} dishes {data?.videosCount ? data?.videosCount : ""} {data?.videosCount > 1 ? "videos":"video" }</Typography>}
      <Grid container direction="row" justifyContent="center" gap={2}>
        {contents.map((content) => (
          <VCard key={content.video.videoId} content={content} />
        ))}
      </Grid>
    </Grid>
  );
}
