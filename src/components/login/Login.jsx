import { Form, Input, Button } from "antd";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../../helpers/hooks/useAuth";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  let history = useHistory();
  const { signin } = useAuth();

  const onFinish = async (values) => {
    const { email, password } = values;
    await signin(email, password);
    history.push("/");
  };

  return (
    <div className="login">
      <h1 className="login-heading">Login</h1>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <span> or </span>
          <Link to="/SignupPage">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
