import React, { useState } from 'react';
import { FaPercentage, FaCalculator, FaUniversity, FaRedo } from 'react-icons/fa';
import { RiExchangeFill } from 'react-icons/ri';

const PerceConvert = () => {
  const [cgpa, setCgpa] = useState('');
  const [percentage, setPercentage] = useState(null);
  const [error, setError] = useState('');
  const [reset, setReset] = useState(false);

  const handleConvert = () => {
    const cgpaValue = parseFloat(cgpa);
    
    setError('');
    setPercentage(null);

    if (isNaN(cgpaValue)) {
      setError('Please enter a valid number');
    } else if (cgpaValue < 0 || cgpaValue > 10) {
      setError('CGPA must be between 0 and 10');
    } else {
      const result = cgpaValue * 10 - 7.5;
      setPercentage(result.toFixed(2));
      setReset(true);
    }
  };

  const handleReset = () => {
    setCgpa('');
    setPercentage(null);
    setError('');
    setReset(false);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <FaPercentage className="text-4xl md:text-5xl text-blue-900" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            RTU Percentage Calculator
          </h1>
          <p className="text-xl md:text-2xl text-blue-900 mb-6">
            Convert your CGPA to percentage using official RTU formula
          </p>
        </div>
      </div>

      {/* Main Calculator Section */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Formula Section */}
            <div className="flex flex-col items-center justify-center mb-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                <RiExchangeFill className="mr-2 text-blue-600" />
                Official RTU Formula
              </h2>
              <p className="text-gray-900 mb-3">
                Percentage = (CGPA × 10) - 7.5
              </p>
              <p className="text-sm text-gray-600">
                As per <a 
                  href="https://rtu.ac.in/home/wp-content/uploads/2019/06/DAT-2019-CGPA-to-Percentage-1.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  RTU guidelines
                </a>
              </p>
            </div>

            {/* Input Section */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">
                Enter Your CGPA (0-10)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={cgpa}
                  onChange={(e) => setCgpa(e.target.value)}
                  placeholder="e.g. 8.5"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                  max="10"
                  step="0.01"
                />
                <div className="absolute inset-y-0 left-3 flex items-center pr-3 pointer-events-none">
                  <FaUniversity className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleConvert}
                className="flex-1 flex items-center justify-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors"
              >
                <FaCalculator className="mr-2" />
                Calculate Percentage
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
            {percentage !== null && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800">
                  Your Percentage: {percentage}%
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

export default PerceConvert;