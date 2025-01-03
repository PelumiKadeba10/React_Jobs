import Navbar from "../components/navbar";
import {Card1, Card2} from "../components/CardsA";
import Card3 from "../components/CardsB";

function Home() {
    return (
      <div>
        <Navbar />
        <div className="bg-[#4338CA] grid cols-1 content-center text-white text-center font-roboto mt-[0px] py-28">
          <div className="text-5xl font-bold"><h1>Become a React Dev</h1></div>
          <p>Find the React job that fits your skll set</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 px-10 md:px-20 pb-8 space-y-6 md:space-y-0 md:space-x-4">
          <Card1 
          title="For Developers" 
          description="Browse our React jobs and start your career today" 
          bttn="Browse Jobs" 
          />
          <Card2
          title="For Employers" 
          description="List your job to find the perfect developer for the role" 
          bttn="Add Job"
          />
        </div>
        <div className="bg-[#EFF6FF]">
          <h1 className="text-[#4338CA] text-xl font-bold p-7 text-center">Recent Jobs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-7 md:px-20 pb-7">
            <Card3 
            type="Full-Time"
            title="Senior React Developer"
            description="get stuff"
            salary="$70K - $80K/Year"
            location="Boston, MA"
            />
            <Card3 
            type="Full-Time"
            title="Senior React Developer"
            description="get stuff"
            salary="$70K - $80K/Year"
            location="Boston, MA"
            />
            <Card3 
            type="Full-Time"
            title="Senior React Developer"
            description="get stuff"
            salary="$70K - $80K/Year"
            location="Boston, MA"
            />
          </div>
        </div>
      </div>
    )
  }
 
  export default Home