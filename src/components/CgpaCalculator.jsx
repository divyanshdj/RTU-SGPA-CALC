import React, { useState } from 'react';
import { FaCalculator, FaRedo, FaUniversity } from 'react-icons/fa';
import { LiaSchoolSolid } from "react-icons/lia";
import { creditsTillSem } from '../utils/credits';

const CgpaCalculator = () => {
  const [semester, setSemester] = useState(8);
  const [cgpaLastSemester, setCgpaLastSemester] = useState('');
  const [sgpaCurrentSemester, setSgpaCurrentSemester] = useState('');
  const [cgpaResult, setCgpaResult] = useState('');
  const [error, setError] = useState('');
  const [reset, setReset] = useState(false);

  const calculateCGPA = () => {
    setError('');
    const totalCreditsPrevious = creditsTillSem[semester - 1] || 0;
    const totalCreditsCurrent = creditsTillSem[semester] - totalCreditsPrevious;

    if (!cgpaLastSemester || !sgpaCurrentSemester) {
      setError('Please fill all fields');
      return;
    }

    if (totalCreditsPrevious === 0 || totalCreditsCurrent === 0) {
      setError('Invalid semester credits configuration');
      return;
    }

    const totalCGPAPrevious = parseFloat(cgpaLastSemester) * totalCreditsPrevious;
    const totalCGPACurrent = parseFloat(sgpaCurrentSemester) * totalCreditsCurrent;

    const totalCredits = totalCreditsPrevious + totalCreditsCurrent;
    const cgpa = (totalCGPAPrevious + totalCGPACurrent) / totalCredits;
    setCgpaResult(cgpa.toFixed(2));
    setReset(true);
  };

  const handleReset = () => {
    setSemester(8);
    setCgpaLastSemester('');
    setSgpaCurrentSemester('');
    setCgpaResult('');
    setError('');
    setReset(false);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <LiaSchoolSolid className="text-4xl md:text-5xl text-blue-900" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            RTU CGPA Calculator
          </h1>
          <p className="text-xl md:text-2xl text-blue-900 mb-6">
            Calculate your Cumulative Grade Point Average
          </p>
        </div>
      </div>

      {/* Main Calculator Section */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Input Section */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-800 mb-2 text-center" htmlFor="semester">
                Select Semester :
              </label>
              <select
                id="semester"
                value={semester}
                onChange={(e) => setSemester(parseInt(e.target.value))}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <option key={sem} value={sem}>{sem} Semester</option>
                ))}
              </select>

              <label className="block text-lg font-medium text-gray-800 mb-2 text-center" htmlFor="cgpaLastSemester">
                CGPA of Last Semester:
              </label>
              <div className="relative mb-4">
                <input
                  type="number"
                  id="cgpaLastSemester"
                  value={cgpaLastSemester}
                  onChange={(e) => setCgpaLastSemester(e.target.value)}
                  min="0"
                  max="10"
                  step="0.01"
                  placeholder="e.g. 8.5"
                  className={`w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error && !cgpaLastSemester ? 'border-2 border-red-500' : ''}`}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FaUniversity className="text-gray-400" />
                </div>
              </div>

              <label className="block text-lg font-medium text-gray-800 mb-2 text-center" htmlFor="sgpaCurrentSemester">
                SGPA of Current Semester:
              </label>
              <div className="relative mb-6">
                <input
                  type="number"
                  id="sgpaCurrentSemester"
                  value={sgpaCurrentSemester}
                  onChange={(e) => setSgpaCurrentSemester(e.target.value)}
                  min="0"
                  max="10"
                  step="0.01"
                  placeholder="e.g. 9.0"
                  className={`w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error && !sgpaCurrentSemester ? 'border-2 border-red-500' : ''}`}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FaUniversity className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={calculateCGPA}
                className="flex-1 flex items-center justify-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors"
              >
                <FaCalculator className="mr-2" />
                Calculate CGPA
              </button>
              {reset && (
                <button
                  onClick={handleReset}
                  className="flex-1 flex items-center justify-center py-3 px-6 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg shadow-md transition-colors"
                >
                  <FaRedo className="mr-2" />
                  Reset
                </button>
              )}
            </div>

            {/* Results */}
            {cgpaResult && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800">
                  Your CGPA: {cgpaResult}
                </h3>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800">
                  {error}
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CgpaCalculator;