import React from "react";
import { useState, useEffect } from "react";
import { FaRecycle , FaCalculator } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import SemesterSelect from "./SemesterSelect";
import SubjectInputs from "./SubjectInputs";
import SGPAResult from "./SGPAResult";
import credits from "../utils/credits";
import gradePoints from "../utils/gradePoints";

const SGPACalc = () => {
  const [semester, setSemester] = useState(0);
  const [subjects, setSubjects] = useState({});
  const [sgpa, setSgpa] = useState(null);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    renderSubjectInputs(semester);
  }, [semester]);

  const renderSubjectInputs = (semester) => {
    const selectedCredits = credits[semester];
    setSubjects(selectedCredits);
  };

  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    const subjectKeys = Object.keys(subjects);
    for (let i = 0; i < subjectKeys.length; i++) {
      const subject = subjectKeys[i];
      const gradeInput = document.getElementById(subject).value.toUpperCase();
      const gradePoint = gradePoints[gradeInput];

      if (gradePoint !== undefined) {
        totalGradePoints += gradePoint * subjects[subject];
        totalCredits += subjects[subject];
      }
    }

    const SGPA = totalGradePoints / totalCredits;
    setSgpa(SGPA.toFixed(2));
    setReset(true);
  };

  const handleReset = () => {
    setSgpa(null);
    setReset(false);
  }

  // Track window width for responsive button text
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <RiGraduationCapFill className="text-4xl md:text-5xl text-blue-900" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            RTU SGPA Calculator
          </h1>
          <p className="text-xl md:text-2xl text-blue-900 mb-6 flex items-center justify-center gap-2">
            Calculate your Semester Grade Point Average with ease
          </p>
        </div>
      </div>

      {/* Main Calculator Section */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-8">
        <div className="bg-white rounded-xl overflow-hidden">
          {/* Calculator Card */}
          <div className="p-6 md:p-8">
            {/* Semester Selection */}
            <div className="mb-8">
              <SemesterSelect semester={semester} setSemester={setSemester} />
            </div>

            {/* Subject Inputs */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center text-center">
                <FaCalculator className="mr-2 text-blue-600" />
                Enter Your Grades :
              </h2>
              <SubjectInputs subjects={subjects} />
            </div>

            {/* Results */}
            <div className="mb-8">
              <SGPAResult sgpa={sgpa} />
            </div>

            {/* Calculate Button */}
            <div className="flex justify-center">
              <button
                onClick={calculateSGPA}
                className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
              >
                <FaCalculator className="mr-2" />
                {windowWidth < 500 ? "Calculate" : "Calculate SGPA"}
              </button>
              {reset && (
                <button
                  onClick={handleReset}
                  className="ml-4 flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
                >
                  <FaRecycle className="mr-2" />
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SGPACalc;