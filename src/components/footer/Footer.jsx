import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
// import ClientMailing from "../../forms/ClientMailing";
import Social from "../social/Social";

export default function Footer() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="footer">
      <hr />
      <div className="container">
        <ul className="footer-nav">
          <ul>
            Contacts
            <div className="footer-contact first-child">
              <i>
                <EnvironmentOutlined />
              </i>
              <span> 3 Hakob Hakobyan, Yerevan</span>
            </div>
            <div className="footer-contact">
              <i>
                <PhoneOutlined />
              </i>
              <span> +374-95-57-55-51</span>
            </div>
            <div className="footer-contact">
              <i>
                <MailOutlined />
              </i>
              <span> emoployeelocator@gmail.com</span>
            </div>
          </ul>
          <ul>
            Menu
            <li className="first-child">Home</li>
            <li>About</li>
            <li>Companies</li>
            <li>Contact</li>
          </ul>
          <ul>
            Info
            <li className="first-child">FAQ</li>
          </ul>
          <div>
            <h3>Newsletter</h3>
            <form action="mailing">
              <input type="mail" placeholder="input your mail" required />
              <button>
                <MailOutlined />
              </button>
            </form>
            <Social className="asd" />
          </div>
        </ul>
      </div>
      <div className="footer-copyright">
        <h3 className="copyright-text">
          <span>Copyright © 2021</span>
          <a href='/'
            onClick={() => {
              openInNewTab("https:/www.linkedin.com/in/sasun-mkrtumyan");
            }}
            target="_blank"
          >
            <span> Sasun Mkrtumyan </span>
          </a>
          <span>All Rights Reserved.</span>
        </h3>
      </div>
    </div>
  );
}
