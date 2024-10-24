import React, { useState } from 'react';
import { creditsTillSem } from '../utils/credits';

const CgpaCalculator = () => {
  const [semester, setSemester] = useState(8);
  const [cgpaLastSemester, setCgpaLastSemester] = useState('');
  const [sgpaCurrentSemester, setSgpaCurrentSemester] = useState('');
  const [cgpaResult, setCgpaResult] = useState('');

  const calculateCGPA = () => {
    const totalCreditsPrevious = creditsTillSem[semester - 1] || 0;
    const totalCreditsCurrent = creditsTillSem[semester] - totalCreditsPrevious;

    if (totalCreditsPrevious === 0 || totalCreditsCurrent === 0) {
      alert("Please ensure valid semester credits.");
      return;
    }

    const totalCGPAPrevious = parseFloat(cgpaLastSemester) * totalCreditsPrevious;
    const totalCGPACurrent = parseFloat(sgpaCurrentSemester) * totalCreditsCurrent;

    const totalCredits = totalCreditsPrevious + totalCreditsCurrent;
    const cgpa = (totalCGPAPrevious + totalCGPACurrent) / totalCredits;
    setCgpaResult(`Your CGPA is: ${cgpa.toFixed(2)}`);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">CGPA Calculator</h1>

      <label className="block mb-2 text-gray-700" htmlFor="semester">Select Semester:</label>
      <select
        id="semester"
        value={semester}
        onChange={(e) => setSemester(parseInt(e.target.value))}
        className="mb-4 p-2 border border-gray-300 rounded"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
          <option key={sem} value={sem}>{sem} Semester</option>
        ))}
      </select>

      <label className="block mb-2 text-gray-700" htmlFor="cgpaLastSemester">CGPA of Last Semester:</label>
      <input
        type="number"
        id="cgpaLastSemester"
        value={cgpaLastSemester}
        onChange={(e) => setCgpaLastSemester(e.target.value)}
        min="0"
        max="10"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />

      <label className="block mb-2 text-gray-700" htmlFor="sgpaCurrentSemester">SGPA of Current Semester:</label>
      <input
        type="number"
        id="sgpaCurrentSemester"
        value={sgpaCurrentSemester}
        onChange={(e) => setSgpaCurrentSemester(e.target.value)}
        min="0"
        max="10"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />

      <button
        onClick={calculateCGPA}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Calculate
      </button>

      {cgpaResult && <div className="mt-4 text-center text-gray-800">{cgpaResult}</div>}
    </div>
  );
};

export default CgpaCalculator;
