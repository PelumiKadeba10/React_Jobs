import Navbar from "../components/navbar"

function More() {
   return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-md p-14">
          <h2 className="text-2xl font-bold mb-4">Senior React Developer</h2>
          <div className="flex justify-between">
            <p className="text-gray-600">Full-Time</p>
            <p className="text-gray-600">Boston, MA</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">Company Info</h3>
              <p className="text-gray-600">NewTek Solutions</p>
              <p className="text-gray-600">NewTek Solutions is a leading technology company specializing in web development and digital solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Contact Info</h3>
              <p className="text-gray-600">Email: contact@teksolutions.com</p>
              <p className="text-gray-600">Phone: 555-555-5555</p>
            </div>
          </div>
          <hr className="my-4" />
          <h3 className="text-lg font-bold mb-2">Job Description</h3>
          <p className="text-gray-600">
            We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.
          </p>
          <hr className="my-4" />
          <h3 className="text-lg font-bold mb-2">Salary</h3>
          <p className="text-gray-600">$70K-$80K/Year</p>
          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Manage Job
            </button>
          </div>
        </div>
      </div>
    </div>
   )
 }

 export default More