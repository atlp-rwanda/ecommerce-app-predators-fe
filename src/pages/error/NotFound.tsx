import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className={`text-gray-400 flex flex-col z-50 bg-customBlue  h-screen justify-center text-center `}
    >
      <h1 className="font-bold text-[80px]">404</h1>
      <p>Not found </p> 
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFound;
