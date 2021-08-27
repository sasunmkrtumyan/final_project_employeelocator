import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 14,
      color: "#1890ff",
    }}
  />
);
function onSearch() {
  console.log("dd");
}
export default function NavSearch() {
  return (
    <Space direction="vertical">
      <Search
        className="nav-search"
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </Space>
  );
}
