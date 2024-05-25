import gradePoints from "../utils/gradePoints";

const SubjectInputs = ({ subjects }) => {
  return (
    <div className="max-w-md mx-auto mt-8">
      {Object.keys(subjects).map((subject, index) => (
        <div key={index} className="mb-6">
          <label
            htmlFor={subject}
            className="block text-lg font-medium text-gray-800 mb-2"
          >
            {`${subject} (Credits: ${subjects[subject]})`}
          </label>
          <select
            id={subject}
            className="block w-full px-4 py-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
          >
            {Object.keys(gradePoints).map((grade, index) => (
              <option
                key={index}
                value={grade.toLowerCase()}
                className="text-base sm:text-lg"
              >
                {grade}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default SubjectInputs;
