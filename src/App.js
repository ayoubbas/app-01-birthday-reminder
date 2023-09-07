import "./App.css";
import data from "./data";
import Person from "./components/person";
import { useEffect, useState } from "react";
import NoBirth from "./components/noBirth";
import { AiOutlinePlusCircle } from "react-icons/ai";
import TransitionsModal from "./components/model";
import { specialeName } from "./firebase";
import { app, db } from "./firebase";
import { getDatabase, ref, onValue, set } from "firebase/database";

import { collection, addDoc } from "firebase/firestore";

function App() {
  const [myData, setMyData] = useState(data);
  const [open, setOpen] = useState(false);

  const datas = () => {
    const dbref = collection(db, "people");
    addDoc(dbref, myData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app extraBold">
      <AiOutlinePlusCircle
        onClick={() => {
          setOpen(!open);
          datas();
        }}
        className="plusIcon"
      />
      <TransitionsModal
        setMyData={setMyData}
        myData={myData}
        setOpen={setOpen}
        open={open}
      />
      <div className="container">
        <div className="title">
          <h1>
            <span>{myData.length}</span> birthdays today
          </h1>
        </div>
        <div className="items">
          {myData.length !== 0 ? (
            myData.map((item) => {
              return <Person myData={myData} item={item} key={item.id} />;
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
