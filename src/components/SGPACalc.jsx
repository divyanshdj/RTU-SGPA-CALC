import React from "react";
import { useState, useEffect } from "react";
import SemesterSelect from "./SemesterSelect";
import SubjectInputs from "./SubjectInputs";
import SGPAResult from "./SGPAResult";
import credits from "../utils/credits";
import gradePoints from "../utils/gradePoints";

const SGPACalc = () => {
  const [semester, setSemester] = useState(0);
  const [subjects, setSubjects] = useState({});
  const [sgpa, setSgpa] = useState(null);

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
  };

  return (
    <>
      <h1 className="text-2xl font-semibold text-center mt-2 mb-2 text-gray-800">
        SGPA Calculator
      </h1>
      <SemesterSelect semester={semester} setSemester={setSemester} />
      <SubjectInputs subjects={subjects} />
      <SGPAResult sgpa={sgpa} />
      <button
        id="calculate"
        className="text-white bg-blue-600 hover:bg-blue-500 font-medium rounded-lg text-lg px-5 py-2.5 mb-20 mt-4"
        onClick={calculateSGPA}
      >
        Calculate SGPA
      </button>
    </>
  );
};

export default SGPACalc;
