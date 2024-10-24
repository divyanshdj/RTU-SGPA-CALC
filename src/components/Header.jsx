import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="h-16 bg-blue-950 flex justify-center items-center">
        <h1 className="font-semibold text-white text-3xl">
          RTU SGPA CALCULATOR
        </h1>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
