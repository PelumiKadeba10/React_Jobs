import { Link } from "react-router-dom";

const Card3 = ({ type, title, description, salary, location }) => {
  return (
    <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-lg pl-7 pr-10 py-6">
      <p className="text-sm text-gray-500">{type}</p>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <Link to="/more">
        <button className="text-indigo-600 hover:underline focus:outline-none">
          more
        </button>
      </Link>
      
      <p className="text-indigo-600 font-medium pb-4">{salary}</p>
      <hr className="border-gray-300" />
      
      <div className="flex justify-between items-center pt-4">
        <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-red-600">
          <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
        </svg>
        <p className="text-red-600">{location}</p>
        </div>
        <Link to="/more">
          <button className="text-white bg-indigo-600 hover:bg-slate-800 rounded-lg px-4 py-2">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card3;

