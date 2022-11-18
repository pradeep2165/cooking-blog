import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import {CardHeader, Button} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useNavigate} from 'react-router-dom'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function VCard({content}) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://yt3.ggpht.com/tD18w9CyzB-SxI4vwkx4HYlvLnNjBCisMk86DGPf7n5SRlMO1AjR6pszWBLYf_4le_G-tO0d1LA=s900-c-k-c0x00ffffff-no-rj" alt=""
            height={40}
            width={40} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${content.video.title}`}
        subheader={`${content.video.publishedTimeText}`}
      />
      <CardMedia
        component="img"
        height={`${content.video.thumbnails[3].height}`}
        image={`${content.video.thumbnails[3].url}`}
        alt="dish pic"
        onClick={()=>navigate(`/video/${content.video.videoId}`)}

      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {`${content.video.title}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Button variant="contained" onClick={()=>navigate(`/video/${content.video.videoId}`)}>Watch now<PlayCircleFilledIcon/></Button>
        
        </IconButton>
      </CardActions>

    </Card>
  );
}