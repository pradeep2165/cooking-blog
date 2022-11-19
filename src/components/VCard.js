import * as React from "react";
import Card from "@mui/material/Card";
import { CardHeader, Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";


export default function VCard({ content }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://yt3.ggpht.com/tD18w9CyzB-SxI4vwkx4HYlvLnNjBCisMk86DGPf7n5SRlMO1AjR6pszWBLYf_4le_G-tO0d1LA=s900-c-k-c0x00ffffff-no-rj" alt="" height={40} width={40} />
          </Avatar>
        }
        title={`${content.video.title.slice(0, 30)}`}
        subheader={`${content?.video?.publishedTimeText ? content?.video?.publishedTimeText :''}`}
      />
      <CardMedia component="img" height={`${content.video.thumbnails[3].height}`} image={`${content.video.thumbnails[3].url}`} alt="dish pic" onClick={() => navigate(`/video/${content.video.videoId}`)} />
      <CardContent>
        <Typography variant="body2" color="text.secondary" height={"50px"}>
          {`${content.video.title}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Watch now" onClick={() => navigate(`/video/${content.video.videoId}`)}>
          <Button variant="contained">
            Watch now
            <PlayCircleFilledIcon />
          </Button>
        </IconButton>
      </CardActions>
    </Card>
  );
}
