import credits from "../utils/credits";

// Helper function to convert number to Roman numeral
const toRoman = (num) => {
  const romanNumerals = ["Ist", "IInd", "IIIrd", "IVth", "Vth", "VIth", "VIIth", "VIIIth"];
  return romanNumerals[num - 1]; // Adjust index since Roman numerals start from I
};

const SemesterSelect = ({ semester, setSemester }) => {
  
  const handleChange = (event) => {
    setSemester(parseInt(event.target.value));
  };

  return (
    <div className="max-w-xs mx-auto mt-2">
      <label htmlFor="semester" className="block text-lg font-medium text-gray-800 mb-2">
        Select Semester
      </label>
      <select
        id="semester"
        value={semester}
        onChange={handleChange}
        className="block w-full px-4 py-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
      >
        {credits.map((semester, index) => (
          <option key={index} value={index}>
            {`B.Tech ${toRoman(index + 1)} Sem`} {/* Convert index to Roman numeral */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SemesterSelect;
