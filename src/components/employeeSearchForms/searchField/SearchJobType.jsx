import { Radio, Space } from "antd";

export default function SearchJobType({ changeHandler, value }) {
  return (
    <div className="search-border">
      <h2 className="heading-text">Job type</h2>
      <Radio.Group value={value} onChange={changeHandler} name="job_type">
        <Space direction="vertical">
          <Radio value="Full time">Full time</Radio>
          <Radio value="Part time">Part time</Radio>
          <Radio value="Freelance">Freelance</Radio>
          <Radio value="Internship">Internship</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
}
