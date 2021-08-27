import SearchCategory from "../employeeSearchForms/searchField/SearchCategory";
import SearchExperiance from "../employeeSearchForms/searchField/SearchExperiance";
import SearchJobType from "../employeeSearchForms/searchField/SearchJobType";
import SearchRegion from "../employeeSearchForms/searchField/searchRegion";
import { Input } from "antd";
import UploadCV from "./UploadCV";
import UploadImage from "./UploadImage";
import { Button } from "antd";
import UploadPortfolio from "./UploadPortfolio";
import { useState } from "react";
import { updateProfile } from "../../sevices/user.services";

export default function MyAccount() {
  const [employeedata, setEmployeedata] = useState({});
  console.log(employeedata);

  function handleChange(e) {
    console.log(e);
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setEmployeedata((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleSelectChange(value, target) {
    const name = target.name;

    setEmployeedata((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h2 className="heading-text large-font ">My account</h2>
      <form
        className="myAccount"
        onSubmit={() => updateProfile({ employeedata })}
      >
        <div className="myAccount-left">
          <p className="post-text">Let's create a post</p>
          <div className="search-sec">
            <div className="search-border">
              <Input
                name="name"
                className="input"
                placeholder="Name"
                onChange={handleChange}
              />
              <Input
                name="surename"
                className="input"
                placeholder="Surname"
                onChange={handleChange}
              />
              <Input
                name="email"
                className="input"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <SearchCategory changeHandler={handleSelectChange} />
            <SearchRegion changeHandler={handleSelectChange} />
            <SearchJobType changeHandler={handleChange} />
            <div className="search-border">
              <h2 className="heading-text">input min salary</h2>
              <Input
                name="Minimum-Wage"
                className="input"
                placeholder="Minimum-Wage"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="myAccount-right">
          <div className="search-sec">
            <SearchExperiance changeHandler={handleChange} />
            <UploadPortfolio changeHandler={handleSelectChange} />
            <UploadCV />
            <UploadImage />
          </div>
        </div>
        <button type="submit" className="btn">
          Create post
        </button>
      </form>
    </div>
  );
}
