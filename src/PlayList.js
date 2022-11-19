import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import {useNavigate} from 'react-router-dom';
export default function PlayList({setPlayListId, setPlayListHide}) {
    const pList = ['Snacks', 'Veg Recipe', 'Site Item', 'Breakfast', 'Non Veg Recipe', 'Lunch', 'Dinner', 'Stater', 'Sweets'];
    const itemId = {
        'Snacks':'PL2jOBpLoK1GIuLBNIhJwU9pFje-wtr8S6', 
    'Veg Recipe':'PL2jOBpLoK1GLHEmESYNqMiHDhSjwTzR_e', 'Site Item':'PL2jOBpLoK1GJR_vQsf4FQYjzCwU8M4Wr3', 'Breakfast':'PL2jOBpLoK1GLRn4tKkMU5jBcRECx5tdOJ', 'Non Veg Recipe':'PL2jOBpLoK1GIp-3QED3Iub69HvegzHgab', 'Lunch':'PL2jOBpLoK1GLT6aJhWzWRtH7xJyF8ujcs', 'Dinner':'PL2jOBpLoK1GKJCK3xLH5b5LECbuJmQCSw', 'Stater':'PL2jOBpLoK1GJm-Ojkaiz39R6DCAFEoT1F', 'Sweets':'PL2jOBpLoK1GII0wfelC9EtdppLly9IghI'}

    pList.sort();
    const navigate = useNavigate()
        const handleClick= (item)=>{
            
            setPlayListId(itemId[item]);    
            setPlayListHide(true)    
            navigate("/")
        }
    
    return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}} >
      {pList.map((item)=>(<ListItem onClick={()=>handleClick(item)} sx={{cursor:'pointer'}} key={item}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`${item}`}/>
      </ListItem>))}
    </List>
  );
}