import { Button, Input } from "antd";
import SearchCategory from "./searchField/SearchCategory";
import SearchExperiance from "./searchField/SearchExperiance";
import SearchJobType from "./searchField/SearchJobType";
import SearchKeyword from "./searchField/SearchKeyword";
import SearchRegion from "./searchField/searchRegion";

export default function EmployeeSearchForms() {
  return (
    <div className="employee-search">
      <SearchKeyword />
      <SearchCategory />
      <SearchRegion />
      <SearchJobType />
      <div className="search-border">
        <h2 className="heading-text">input min salary</h2>
        <Input
          name="Minimum-Wage"
          className="input"
          placeholder="Minimum-Wage"
        />
      </div>
      <SearchExperiance />
      <Button className="but" type="primary">
        Search
      </Button>
    </div>
  );
}
