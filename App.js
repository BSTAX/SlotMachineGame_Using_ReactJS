import React from "react";

const SlotM = (props) => {
  // let x = "😀";
  // let y = "😀";
  // let z = "😍";

  let {x,y,z}=props;

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is  a Matching</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is a Not Matching</h1>
          <hr />
        </div>
      </>
    );
  }
};

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        Welcome to <span style={{ fontWeight: "bold" }}>Slot machine game</span>{" "}
      </h1>
      <div className="slotmachine">
        <SlotM x="😀" y="😀" z="😀" />

        <SlotM x="😍" y="😀" z="😍" />

        <SlotM x="😀" y="🙄" z="😀" />

        <SlotM x="😎" y="😎" z="😎" />
      </div>
    </>
  );
};

export default App;
