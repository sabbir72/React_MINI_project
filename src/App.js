import React, { useState } from "react";
import AddList from "./Component/AddList";
import "./App.css";
import Modal from "./Component/Modal";

const data = [
  {
    id: 1,
    title: "Atisum Project",
    StartDate: "22/2/2022",
  },
  {
    id: 2,
    title: "Auto Mobile python",
    StartDate: "20/1/2022",
  },
  {
    id: 3,
    title: "Database Project",
    StartDate: "12/1/2022",
  },
];

function App() {
  const [list, setList] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    const filterList = list.filter((item) => item.id !== id);
    setList(filterList);
  };

  return (
    <div className="App">
      <h2 style={{ textAlign: "center", margin: "50px" }}>
        Learn React Project <span style={{ color: "green" }}>Project  List</span>
      </h2>
      {list.map((item) => (
        <div
          onClick={() => handleDelete(item.id)}
          key={item.id}
          className="card"
        >
          <h3>{item.title}</h3>
          <p>{item.StartDate}</p>
        </div>
      ))}
      <div className="btn_container">
        <button onClick={(e) => setShowModal(true)}>add List</button>
      </div>

      {showModal && (
        <Modal>                               
          <AddList setList={setList} setShowModal={setShowModal} />
          <button onClick={(e) => setShowModal(false)}>CLOSE MODAL</button>
        </Modal>
      )}
    </div>
  );
}

export default App;
