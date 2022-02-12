import yawnOn from "./ABS and SeatlBelt.png";

const Simulation = () => {
  const Yawning = () => {
    return (
      <div>
        <img src={yawnOn} alt="SeatBelt and Braking on" />
      </div>
    );
  };

  return (
    <div>
      <button onclick={Yawning}>Yawning</button>
      <button>EYE CLOSE</button>
    </div>
  );
};

export default Simulation;
