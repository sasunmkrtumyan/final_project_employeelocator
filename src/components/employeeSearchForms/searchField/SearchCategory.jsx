import { Select } from "antd";

const { Option } = Select;

export default function SearchCategory({ changeHandler }) {
  return (
    <div className="search-border">
      <h2 className="heading-text">Category</h2>
      <Select
        showSearch
        style={{ width: "100%" }}
        placeholder="Select"
        onChange={changeHandler}
      >
        <Option name="profession" value="UI/UX designer">
          UI/UX designer
        </Option>
        <Option name="profession" value="Front-end developer">
          Front-end developer
        </Option>
        <Option name="profession" value="Back-end developer">
          Back-end developer
        </Option>
        <Option name="profession" value="Full-stack developer">
          Full-stack developer
        </Option>
        <Option name="profession" value="Web developer">
          Web developer
        </Option>
        <Option name="profession" value="Graphic gesigner">
          Graphic gesigner
        </Option>
        <Option name="profession" value="Mobile developer">
          Mobile developer
        </Option>
        <Option name="profession" value="Another">
          Another
        </Option>
      </Select>
    </div>
  );
}
