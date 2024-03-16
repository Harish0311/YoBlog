import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { MenuItem } from '@mui/material';



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

export default function Post(props) {

  const [openDialog, setOpenDialog] = React.useState(false);
  const handleOpenDialog = () =>{
    setOpenDialog(true);
  }
  const handleCloseDialog = () =>{
    setOpenDialog(false);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: props.color }} aria-label="recipe">
            {props.input[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleOpenDialog}>
            <MoreVertIcon />
          </IconButton>
          
      
        }
        title= {props.input}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
          {/* <DialogTitle>MoreOptions</DialogTitle> */}

          <DialogContent>
            {/* Settings content */}
          <MenuItem onClick={handleCloseDialog}><EditIcon/>Edit</MenuItem>
        <MenuItem onClick={handleCloseDialog}><DeleteIcon/>Delete</MenuItem>
        
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </Dialog>
    </Card>
  );
}
