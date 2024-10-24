import Header from "./components/Header";
import Social from "./components/Social";
import SGPACalc from "./components/SGPACalc";
import PerceConvert from "./components/PerceConvert";
import { Routes, Route } from "react-router-dom";
import CgpaCalculator from "./components/CgpaCalculator";

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<SGPACalc />} />
          <Route path="/percent" element={<PerceConvert/>} />
          <Route path="/cgpa" element={<CgpaCalculator/>} />
        </Routes>
      </div>
      <Social />
    </>
  );
};

export default App;
