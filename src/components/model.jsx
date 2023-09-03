import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, TextField, makeStyles } from "@mui/material";
// import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    focused : {
        outlineColor:"#eee"
    }
}))
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: '2px solid #eee',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function TransitionsModal({ open, setOpen }) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const classes = useStyles()
  return (
    <div>
      {/* <Button >Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form className="formAddBirth">
              <TextField className={classes.focused} id="outlined-basic" label="Name" variant="outlined" />
              <TextField id="outlined-basic" label="Age" variant="outlined" />
              <TextField id="outlined-basic" label="Image" variant="outlined" />
              <Button style={{backgroundColor:"rebeccapurple"}} variant="contained">Add To Reminder</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
