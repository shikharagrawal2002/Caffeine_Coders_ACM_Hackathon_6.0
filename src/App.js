import Footer from "./Footer";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Simulation from "./Simulation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/simulation" exact element={<Simulation />} />
          </Routes>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
