import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RemainingTime from "../logic/timeRemaining";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LessTimeBirth({ openTime, setOpenTime, myData, itemId,setItemId }) {
   const person= myData.find((item)=>item.id=== itemId)
   console.log(person);
   
   const [timeRemaining, setTimeRemaining] = React.useState(RemainingTime());
   
   React.useEffect(() => {
    console.log(itemId);
      if(person){
       console.log(person);
       const dates = person.year+"-"+person.month+"-"+person.day 
       setTimeRemaining(dates)
      }
    const myInter = setInterval(() => {
        const Update = RemainingTime()
      setTimeRemaining(Update);
    }, 1000);
    return () => clearInterval(myInter);
  }, [person,itemId]);
//   console.log(item);
  const handleCloseTime = () => {
    setOpenTime(false)
    setItemId("")
  };

  return (
    <div>
      <Modal
        open={openTime}
        onClose={handleCloseTime}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h1>Countdown Timer</h1>
            <div>
              <p>Days: {timeRemaining.days}</p>
              <p>Hours: {timeRemaining.hours}</p>
              <p>Minutes: {timeRemaining.minutes}</p>
              <p>Seconds: {timeRemaining.seconds}</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
