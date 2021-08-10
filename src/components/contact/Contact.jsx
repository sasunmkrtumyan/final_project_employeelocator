import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Social from "../social/Social";
import EmailForm from "./EmailForm";

export default function Contact() {
  return (
    <div className="container">
      <hr />
      <div className="contact">
        <h2>Contact</h2>
        <div className="map">
          <iframe
            title="map"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.4614386851454!2d44.490654666640566!3d40.19879743678661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd6beca25551%3A0x9192912c6f698e91!2s3%20Hakob%20Hakobyan%20St%2C%20Yerevan%200033%2C%20Armenia!5e0!3m2!1sen!2s!4v1628512297912!5m2!1sen!2s"
          ></iframe>
        </div>
        <div className="info">
          <div className="text">
            <h3 className="textHeading">Contact us</h3>
            <div className="cont">
              <i>
                <EnvironmentOutlined />
              </i>
              <span> 3 Hakob Hakobyan, Yerevan</span>
            </div>
            <div className="cont">
              <i>
                <PhoneOutlined />
              </i>
              <span> +374-95-57-55-51</span>
            </div>
            <div className="cont">
              <i>
                <MailOutlined />
              </i>
              <span> emoployeelocator@gmail.com</span>
            </div>
            <div className="social cont">
              <Social />
            </div>
          </div>
          <div className="form">
            <h3>Get in touch</h3>
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
  );
}
