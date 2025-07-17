import Header from "./components/Header";
import SGPACalc from "./components/SGPACalc";
import PerceConvert from "./components/PerceConvert";
import { Routes, Route } from "react-router-dom";
import CgpaCalculator from "./components/CgpaCalculator";
import Footer from "./components/Footer";
import Home from "./components/Home";
import StudentProfile from "./components/StudentProfile";

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4 min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<StudentProfile />} />
          <Route path="/sgpa" element={<SGPACalc />} />
          <Route path="/percent" element={<PerceConvert />} />
          <Route path="/cgpa" element={<CgpaCalculator />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
