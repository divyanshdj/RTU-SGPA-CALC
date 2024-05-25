const SGPAResult = ({ sgpa }) => {
    return (
      <div id="result" className="mt-8 text-xl font-semibold text-center max-w-xs mx-auto">
        {sgpa && (
          <p className="text-blue-600">
            Your SGPA is: <span className="text-black">{sgpa}</span>
          </p>
        )}
      </div>
    );
  };
  
  export default SGPAResult;
  