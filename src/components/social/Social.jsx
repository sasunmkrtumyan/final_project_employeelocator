import {
  FacebookFilled,
  GithubOutlined,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
export default function Social() {
  return (
    <div className="icons-list">
      <LinkedinFilled title="Linkedin" className="social" />
      <FacebookFilled title="Facebook" className="social" />
      <TwitterSquareFilled title="Twitter" className="social" />
      <GithubOutlined title="Github" className="social" />
    </div>
  );
}
