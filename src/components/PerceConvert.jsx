import React, { useState } from 'react';

const PerceConvert = () => {
  const [cgpa, setCgpa] = useState('');
  const [percentage, setPercentage] = useState(null);
  const [error, setError] = useState('');

  const handleConvert = () => {
    const cgpaValue = parseFloat(cgpa);
    
    // Reset error state
    setError('');

    if (isNaN(cgpaValue)) {
      setError('Please enter a valid number.');
      setPercentage(null);
    } else if (cgpaValue < 0 || cgpaValue > 10) {
      setError('CGPA must be between 0 and 10.');
      setPercentage(null);
    } else {
      const result = cgpaValue * 10 - 7.5;
      setPercentage(result.toFixed(2));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">CGPA to Percentage Converter</h1>
      <p className="font-semibold text-wrap text-base mb-4">
        The formula for converting SGPA to percentage at <a className='text-blue-500 underline' href="https://rtu.ac.in/home/wp-content/uploads/2019/06/DAT-2019-CGPA-to-Percentage-1.pdf">Rajasthan Technical University (RTU)</a> is:
      </p>
      <h2 className="text-xl font-bold text-center mb-4">
        Percentage = CGPA x 10 – 7.5
      </h2>
      <input
        type="number"
        value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}
        placeholder="Enter your CGPA (0 - 10)"
        className="border rounded-md p-2 mb-4 w-64 text-center"
        min="0"
        max="10"
      />
      <button
        onClick={handleConvert}
        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-200"
      >
        Convert
      </button>
      {percentage !== null && (
        <div className="mt-4 text-xl font-semibold">
          {`Your Percentage: ${percentage}%`}
        </div>
      )}
      {error && (
        <div className="mt-4 text-red-500">
          {error}
        </div>
      )}
    </div>
  );
};

export default PerceConvert;
