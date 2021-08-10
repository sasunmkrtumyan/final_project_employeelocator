import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
// import ClientMailing from "../../forms/ClientMailing";
import Social from "../social/Social";

export default function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="container">
        <ul className="footer-nav">
          <ul>
            MENU
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
            <li>Companies</li>
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
    </div>
  );
}
