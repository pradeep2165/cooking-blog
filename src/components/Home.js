import * as React from "react";
import Grid from "@mui/material/Grid";
import VCard from "./VCard";
import { getVideoData, getPlayListVideoData } from "../api/getVideoData";
import { rowData } from "./ds";



export default function Home({ playListId }) {
  const [data, setData] = React.useState(rowData);
  const contents = data.contents;

  React.useEffect(() => {
    // getVideoData().then((videoData) => setData(videoData));
  }, []);
  React.useEffect(() => {
    if (playListId) {
      // getPlayListVideoData(playListId).then((videoData) => setData(videoData));
    }
  }, [playListId]);

  return (
    <Grid container>
      <Grid container direction="row" justifyContent="center" gap={2}>
        {contents.map((content) => (
          <VCard key={content.video.videoId} content={content} />
        ))}
      </Grid>
    </Grid>
  );
}
