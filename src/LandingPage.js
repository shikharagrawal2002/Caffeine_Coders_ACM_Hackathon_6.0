import Car_Safety from "./Screenshot_2022-02-12_014520-removebg-preview.png";

const LandingPage = () => {
  return (
    <div className="content">
      <div>
        <img className="lottie" src={Car_Safety} alt="fieoif" />
      </div>
      <div className="dispContent">
        <div>
          <h1>Welcome to VehiSafe</h1>
          <p>
            We have implemented an AI/ML model that will detect
            <br></br>
            driver sleepiness and responsiveness.
            <br></br>
            <br></br>
            This is done by taking the user eye pattern
            <br></br>
            and mouth movement for a yawn into consideration.
            <br></br>
            <br></br>
          </p>
        </div>
        <div className="test">
          <a href="/test">Test Now</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
