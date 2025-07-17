import React from "react";
import { Link } from "react-router-dom";
import { FaCalculator, FaExchangeAlt, FaChartLine, FaExternalLinkAlt, FaUserGraduate } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";

const Home = () => {
  const features = [
    {
      title: "SGPA Calculator",
      description: "Calculate your Semester Grade Point Average instantly with our precise calculator",
      icon: <FaCalculator className="text-4xl text-blue-600" />,
      path: "/sgpa",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Percentage Converter",
      description: "Accurately convert between SGPA and percentage marks as per RTU guidelines",
      icon: <FaExchangeAlt className="text-4xl text-green-600" />,
      path: "/percent",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "CGPA Calculator",
      description: "Compute your Cumulative Grade Point Average across multiple semesters",
      icon: <FaChartLine className="text-4xl text-purple-600" />,
      path: "/cgpa",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
        {
    title: "Student Profile",
    description: "Store your academic history including 10th, 12th, and all semester results",
    icon: <FaUserGraduate className="text-4xl text-indigo-600" />,
    path: "/profile",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <PiStudentBold className="text-6xl md:text-7xl text-blue-900" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-900">RTU</span> Academic Toolkit
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Precision tools for Rajasthan Technical University students
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Calculation Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center group relative">
                <Link
                  to={feature.path}
                  className={`${feature.bgColor} ${feature.borderColor} w-full rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col relative overflow-hidden`}
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center z-50">
                    <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center text-white font-medium">
                      <span className="mr-2">Go to tool</span>
                      <FaExternalLinkAlt />
                    </div>
                  </div>
                  
                  <div className="p-8 text-center flex flex-col items-center h-full relative z-10">
                    <div className="mb-6">{feature.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Calculate Your Grades?
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Get started with our accurate calculators today
          </p>
          <Link
            to="/sgpa"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
          >
            <RiGraduationCapFill className="mr-2" />
            Begin Calculations
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;