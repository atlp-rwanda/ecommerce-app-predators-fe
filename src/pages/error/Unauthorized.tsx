import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div
      className={`text-gray-400 flex flex-col z-50 bg-customBlue  h-screen justify-center text-center `}
    >
      <h1 className="font-bold text-[80px]">403</h1>
      <p>Forbidden </p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Unauthorized;
