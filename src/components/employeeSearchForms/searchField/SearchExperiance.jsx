import { Radio, Space } from "antd";

export default function SearchExperiance({ changeHandler }) {
  return (
    <div className="search-border">
      <h2 className="heading-text">Experiance</h2>
      <Radio.Group onChange={changeHandler} name="experience">
        <Space direction="vertical">
          <Radio value="0-6 mounts">0-6 mounts</Radio>
          <Radio value="6 mounts - 1 year">6 mounts - 1 year</Radio>
          <Radio value="1 year - 2 years">1 year - 2 years</Radio>
          <Radio value="2 year - 3 years">2 year - 3 years</Radio>
          <Radio value="3 year - 4 years">3 year - 4 years</Radio>
          <Radio value="4 year - 5 years">4 year - 5 years</Radio>
          <Radio value="5+ years">5+ years</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
}
