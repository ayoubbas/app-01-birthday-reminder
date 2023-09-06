import "./App.css";
import data from "./data";
import Person from "./components/person";
import { useState } from "react";
import NoBirth from "./components/noBirth";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Modal } from "@mui/material";
import TransitionsModal from "./components/model";
import LessTimeBirth from "./components/modalTimeBirth";
console.log(data);

function App() {
  const [myData, setMyData] = useState(data);
  const [open, setOpen] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  return (
    <div className="app extraBold">
      <AiOutlinePlusCircle
        onClick={() => {
          setOpen(!open);
        }}
        className="plusIcon"
      />
      <LessTimeBirth setMyData={setMyData} myData={myData} setOpenTime={setOpenTime} openTime={openTime}  />
      <TransitionsModal setMyData={setMyData} myData={myData} setOpen={setOpen} open={open} />
      <div className="container">
        <div className="title">
          <h1>
            <span>{myData.length}</span> birthdays today
          </h1>
        </div>
        <div className="items">
          {myData.length !== 0 ? (
            myData.map((item) => {
              return <Person opnTime={openTime} setOpenTime={setOpenTime} item={item} key={item.id} />;
            })
          ) : (
            <NoBirth />
          )}
        </div>
        <button
          className="btnDele extraBold"
          onClick={() => {
            setMyData("");
          }}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}

export default App;
