import {
  createFromIconfontCN,
  FacebookFilled,
  GithubOutlined,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
export default function Social() {
  return (
    <div className="icons-list">
      <LinkedinFilled title='Linkedin' className="social" title="Linkedin" />
      <FacebookFilled title='Facebook' className="social" title="Facebook" />
      <TwitterSquareFilled title='Twitter' className="social" title="Twitter" />
      <GithubOutlined title='Github' className="social" title="Github" />
    </div>
  );
}
