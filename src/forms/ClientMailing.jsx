import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Subscribe } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 14,
      color: "#1890ff",
    }}
  />
);
function onSubscribe() {
  console.log("dd");
}
export default function ClientMailing() {
  return (
    <Space direction="vertical">
      <Subscribe
        placeholder="input your email"
        allowClear
        enterButton="Subscribe"
        size="large"
        onSearch={onSubscribe}
      />
    </Space>
  );
}
