import { Radio, Space } from "antd";
import { useState } from "react";

export default function SearchJobType({ changeHandler }) {
  return (
    <div className="search-border">
      <h2 className="heading-text">Job type</h2>
      <Radio.Group onChange={changeHandler} name="job-type">
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
