import React from "react";
import Pagination from "../../components/pagination/Pagination";
import EmployeeList from "../../components/employeeList/EmployeeList";
import EmployeeSearchForms from "../../components/employeeSearchForms/EmployeeSearchForms";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
// import NoData from "./NoData";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <h1 className="home-heading">Employee list</h1>
        {/* <h1 className='home-heading'>Not found any employee </h1> */}
        <div className="body">
          <div className="employeeSearchForms">
            <EmployeeSearchForms />
          </div>
          <div className="employeeList">
            <EmployeeList />
            {/* <NoData /> */}
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
