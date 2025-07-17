import React, { useState, useEffect } from 'react';
import { FaUserGraduate, FaTrash, FaInfoCircle } from 'react-icons/fa';

const StudentProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    enrollment: '',
    tenthPercentage: '',
    twelfthPercentage: '',
    semesters: Array(8).fill({ sgpa: '', percentage: '' }),
  });

  const calculatePercentage = (sgpa) => {
    if (!sgpa) return '';
    const percentage = (sgpa * 10) - 7.5;
    return percentage.toFixed(2);
  };

  useEffect(() => {
    const savedProfile = localStorage.getItem('rtuStudentProfile');
    if (savedProfile) setProfile(JSON.parse(savedProfile));
  }, []);

  useEffect(() => {
    localStorage.setItem('rtuStudentProfile', JSON.stringify(profile));
  }, [profile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSemesterChange = (index, field, value) => {
    setProfile((prev) => {
      const newSemesters = [...prev.semesters];
      if (field === 'sgpa') {
        newSemesters[index] = {
          ...newSemesters[index],
          sgpa: value,
          percentage: calculatePercentage(value),
        };
      } else {
        newSemesters[index] = { ...newSemesters[index], [field]: value };
      }
      return { ...prev, semesters: newSemesters };
    });
  };

  const clearData = () => {
    if (window.confirm('Clear all your local data?')) {
      localStorage.removeItem('rtuStudentProfile');
      setProfile({
        name: '',
        enrollment: '',
        tenthPercentage: '',
        twelfthPercentage: '',
        semesters: Array(8).fill({ sgpa: '', percentage: '' }),
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center mb-4 text-blue-900">
          <FaUserGraduate className="text-4xl mr-3" />
          <h1 className="text-3xl font-bold">Academic Tracker</h1>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm max-w-2xl mx-auto text-left">
          <div className="flex items-center flex-col justify-center md:flex-row md:items-start">
            <FaInfoCircle className="text-blue-900 mt-1 mr-2 flex-shrink-0" />
            <p className="text-sm text-gray-700 leading-relaxed">
              This tool stores data only in your browser. No data is uploaded anywhere.
              Use it to track your academic progress semester-wise.
            </p>
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Student Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Enrollment Number</label>
            <input
              type="text"
              name="enrollment"
              value={profile.enrollment}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enrollment number"
            />
          </div>
        </div>
      </section>

      {/* School Scores */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">School Academic Records</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700 mb-1">10th Percentage</label>
            <input
              type="number"
              name="tenthPercentage"
              value={profile.tenthPercentage}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. 85.60"
              min="0"
              max="100"
              step="0.01"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">12th Percentage</label>
            <input
              type="number"
              name="twelfthPercentage"
              value={profile.twelfthPercentage}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. 88.75"
              min="0"
              max="100"
              step="0.01"
            />
          </div>
        </div>
      </section>

      {/* Semesters */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Semester-wise SGPA & Percentage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Percentage formula: <strong>(SGPA × 10) - 7.5</strong>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {profile.semesters.map((sem, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-md font-semibold text-blue-900 mb-2">Semester {index + 1}</h3>
              <div className="space-y-2">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">SGPA</label>
                  <input
                    type="number"
                    value={sem.sgpa}
                    onChange={(e) => handleSemesterChange(index, 'sgpa', e.target.value)}
                    className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. 8.2"
                    min="0"
                    max="10"
                    step="0.01"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Percentage</label>
                  <input
                    value={sem.percentage || ''}
                    placeholder="Auto-calculated"
                    className="w-full p-2 text-sm border border-gray-300 rounded-md bg-gray-50"
                    readOnly
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clear Button */}
      <div className="w-full flex justify-center items-center text-right">
        <button
          onClick={clearData}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-md transition-colors"
        >
          <FaTrash className="mr-2" />
          Clear All Data
        </button>
      </div>
    </div>
  );
};

export default StudentProfile;
