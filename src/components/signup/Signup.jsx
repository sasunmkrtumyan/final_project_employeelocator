import { useHistory } from "react-router-dom";
import { Form, Input, Cascader, Select, Button } from "antd";
import { useAuth } from "../../helpers/hooks/useAuth";
import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const residences = [
  {
    value: "Yerevan",
    label: "Yerevan",
  },
  {
    value: "Aragatsotn",
    label: "Aragatsotn",
  },
  {
    value: "Ararat",
    label: "Ararat",
  },
  {
    value: "Armavir",
    label: "Armavir",
  },
  {
    value: "Gegharkunik",
    label: "Gegharkunik",
  },
  {
    value: "Kotayk",
    label: "Kotayk",
  },
  {
    value: "Lori",
    label: "Lori",
  },
  {
    value: "Shirak",
    label: "Shirak",
  },
  {
    value: "Syunik",
    label: "Syunik",
  },
  {
    value: "another",
    label: "another",
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Signup = () => {
  let history = useHistory();
  const [form] = Form.useForm();
  const { signup } = useAuth();

  const onFinish = async ({ email, password, fullName }) => {
    await signup(email, password, fullName);
    history.push("/login");
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="374">+374</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="container">
      <div className="signup">
        <h1 className="login-heading">Registration</h1>
        <Form
          className="signup-form"
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["Yerevan", "Armenia"],
            prefix: "374",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            <span> or register with </span>
            <GoogleOutlined className="registerIcon googleIcon" />
            <FacebookOutlined className="registerIcon fbIcon" />
            <TwitterOutlined className="registerIcon twIcon" />
            <LinkedinOutlined className="registerIcon inIcon" />
            <GithubOutlined className="registerIcon githubIcon" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
