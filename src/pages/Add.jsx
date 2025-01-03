import Navbar from "../components/navbar"
import Card3 from "../components/CardsB"

function new_card() {
  typ = document.getElementById("type")
  tils = document.getElementById("Title")
  des = document.getElementById("description")
  sal = document.getElementById("salary")
  loc = document.getElementById("location")
  return (
    <Card3 
      type={typ}
      title={tils}
      description={des}
      salary={sal}
      location={loc}
    />
  );
}

function Add() {
    return (
      <div>
        <Navbar />
        <form className="m-auto w-96 pt-10 pb-6 spx-4 grid justify-items-stretch font-roboto text-sm">
          <div className="text-center text-xl font-bold pb-3">
          <h1>Add Job</h1>
          </div>

          <label>Job type</label>
          <select id="type" className="border rounded p-1.5">
            <option>Full-Time</option>
            <option>Intern</option>
          </select>

          <label className="pt-3">Job Listing Name</label>
          <input id="Title" className="border rounded p-1.5" type="text" placeholder="e.g. Beautiful Apartment in Miami"></input>
          
          <label className="pt-3">Description</label>
          <textarea id="description" className="border rounded px-1.5 pt-1.5 pb-14" placeholder="Add any job duties, expectations, requirements, etc."></textarea>

          <label className="pt-3">Salary</label>
          <select id="salary" className="border rounded p-1.5">
            <option>Under $50K</option>
            <option></option>
            <option></option>
            <option></option>
          </select>
  
          <label className="pt-3">Location</label>
          <input id="location" className="border rounded p-1.5" type="text" placeholder="Company Location"></input>
          <div className="text-lg py-3">
            <h1>Company Info</h1>
          </div>
  
          <label>Company Name</label>
          <input className="border rounded p-1.5" type="text" placeholder="Company Name"></input>
  
          <label className="pt-3">Company Description</label>
          <textarea className="border rounded px-1.5 pt-1.5 pb-14" placeholder="What does your company do ?"></textarea>
  
          <label className="pt-3">Contact Email</label>
          <input className="border rounded p-1.5" type="text" placeholder="Email address for applicants"></input>
  
          <label className="pt-3">Contact Phone</label>
          <input className="border p-1.5" type="text" placeholder="Optional phone for applicants"></input>
          
          <button className="bg-[#6366F1] text-white rounded-full mt-4 p-1.5" onClick={new_card}>Add Job</button>
        </form>
      </div>
    )
  }
 
  export default Add