import { Link } from "react-router-dom";
import pic from '../assets/pic.png';

function Navbar() {
  return (
    <nav className='bg-[rgb(67,56,202)] fixed inset-x-0 py-4 px-16 flex justify-between border-b-1'>
        <div className='flex items-center'>
            <img src={pic} alt="Logo" className='h-8 w-8 mr-1.5' />
            <p className="text-lg text-white font-bold font-roboto">React Jobs</p>
        </div>
        <ol className='flex space-x-3 text-xs text-white font-semibold'>
            <button className="bg-inherit hover:bg-slate-800 p-2 rounded"><li><Link to="/Home">Home</Link></li></button>
            <button className="bg-inherit hover:bg-slate-800 p-2 rounded"><li><Link to="/Jobs">Jobs</Link></li></button>
            <button className="bg-inherit hover:bg-slate-800 p-2 rounded"><li><Link to="/Add">Add Job</Link></li></button>
        </ol>
    </nav>
  )
}

export default Navbar
