import React from 'react';
// import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Button, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../store/action';
import SaveIcon from '@mui/icons-material/Save';


// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function Post(props) {

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openEditDialog, setopenEditDialog] = React.useState(false);
  const [updatedContent,setupdatedContent] = React.useState(props.text)
  const dispatch = useDispatch();

  const handleDeletion = () => {
    dispatch(deletePost(props.postId))
    handleCloseDialog();
  }
  const handleOpenDialog = () => {
    setOpenDialog(true);
  }
  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  const handleopenEditDialog = () => {
    setopenEditDialog(true);
    handleCloseDialog();
  }
  const handlecloseEditDialog = () => {
    setopenEditDialog(false);
    handleCloseDialog();
  }

  const handleTextChange=(event)=>{
    setupdatedContent(event.target.value);
  }

  const handleButtonClick=()=>{
    handlecloseEditDialog();
    dispatch(editPost(props.postId,updatedContent))
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
        title={props.input}
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
          <MenuItem onClick={handleopenEditDialog}><EditIcon />Edit</MenuItem>
          <MenuItem onClick={handleDeletion}><DeleteIcon />Delete</MenuItem>

        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
      <Dialog open={openEditDialog} onClose={handlecloseEditDialog}>
        {/* <DialogTitle>MoreOptions</DialogTitle> */}

        <DialogContent>
          {/* Settings content */}
          <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          onChange={handleTextChange}
          value={updatedContent}
        />
        <Button variant="contained" onClick={handleButtonClick} endIcon={<SaveIcon />}>
          Save
        </Button>


        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
