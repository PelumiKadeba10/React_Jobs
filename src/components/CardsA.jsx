import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
export const Card1 = ({ title, description, bttn }) => {
    return (
      <div className="w-5/6 bg-[#F3F4F6] border-gray-300 rounded-lg shadow-md p-4 ">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to="/Jobs">
        <button className="bg-[#4338CA] text-white py-2 px-4 rounded-lg hover:bg-slate-800">
          {bttn}
        </button>
        </Link>
      </div>
    );
  };
  

  export const Card2 = ({ title, description, bttn }) => {
    return (
      <div className="w-5/6 bg-[#E0E7FF] border-gray-300 rounded-lg shadow-md p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to="/Add">
        <button className="bg-[#4338CA] text-white py-2 px-4 rounded-lg hover:bg-slate-800">
          {bttn}
        </button>
        </Link>
      </div>
    );
  };
  