import { Tag, Divider } from "antd";

import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import user6 from "../../assets/images/users/user6.jpg";

export default function EmployeeCard() {
  return (
    <>
      <div className="employeeCard">
        <div className="img-div">
          <img src={user1} alt="user1" />
        </div>
        <div className="central-div">
          <span className="proffesion">React JS developer</span>
          <span className="name">Sasun Mkrtumyan</span>
          <span className="post-date">posted date: 05-09-2021</span>
        </div>
        <div className="salary-div">
          <span className="salary">min salary - 200.000</span>
          <div>
            <Tag className="tag" color="#87d068">
              Freelance
            </Tag>
          </div>
        </div>
      </div>
      <div className="employeeCard">
        <div className="img-div">
          <img src={user2} alt="user1" />
        </div>
        <div className="central-div">
          <span className="proffesion">Javascript developer</span>
          <span className="name">Mayis Yeghvardci</span>
          <span className="post-date">posted date: 05-09-2021</span>
        </div>
        <div className="salary-div">
          <span className="salary">min salary - 1.250.000</span>
          <Tag className="tag" color="#2db7f5">
            Erb kayf@ ta
          </Tag>
        </div>
      </div>
      <div className="employeeCard">
        <div className="img-div">
          <img src={user3} alt="user1" />
        </div>
        <div className="central-div">
          <span className="proffesion">React JS developer</span>
          <span className="name">Artur Gyulabyan</span>
          <span className="post-date">posted date: 05-09-2021</span>
        </div>
        <div className="salary-div">
          <span className="salary">min salary - 300.000</span>
          <Tag className="tag" color="#f50">
            Full time
          </Tag>{" "}
        </div>
      </div>
      <div className="employeeCard">
        <div className="img-div">
          <img src={user1} alt="user1" />
        </div>
        <div className="central-div">
          <span className="proffesion">React JS developer</span>
          <span className="name">Sasun Mkrtumyan</span>
          <span className="post-date">posted date: 05-09-2021</span>
        </div>
        <div className="salary-div">
          <span className="salary">min salary - 200.000</span>
          <div>
            <Tag className="tag" color="#87d068">
              Freelance
            </Tag>
          </div>
        </div>
      </div>
      <div className="employeeCard">
        <div className="img-div">
          <img src={user2} alt="user1" />
        </div>
        <div className="central-div">
          <span className="proffesion">Javascript developer</span>
          <span className="name">Mayis Yeghvardci</span>
          <span className="post-date">posted date: 05-09-2021</span>
        </div>
        <div className="salary-div">
          <span className="salary">min salary - 1.250.000</span>
          <Tag className="tag" color="#2db7f5">
            Erb kayf@ ta
          </Tag>
        </div>
      </div>
      <div className="employeeCard">
        <div className="img-div">
          <img src={user3} alt="user1" />
        </div>
        <div className="central-div">
          <span className="proffesion">React JS developer</span>
          <span className="name">Artur Gyulabyan</span>
          <span className="post-date">posted date: 05-09-2021</span>
        </div>
        <div className="salary-div">
          <span className="salary">min salary - 300.000</span>
          <Tag className="tag" color="#f50">
            Full time
          </Tag>{" "}
        </div>
      </div>
      <div className="employeeCard">
        <div className="img-div">
          <img src={user4} alt="user1" />
        </div>
        <div className="central-div">
          <span className="proffesion">Xar@ developer</span>
          <span className="name">Set Yeghvardci</span>
          <span className="post-date">posted date: 05-09-2021</span>
        </div>
        <div className="salary-div">
          <span className="salary">min salary - 400.000</span>
          <Tag className="tag" color="#87d068">
            Freelance
          </Tag>
        </div>
      </div>

      <div className="employeeCard">
        <div className="img-div">
          <img src={user5} alt="user1" />
        </div>
        <div className="central-div">
          <span className="proffesion">React JS developer</span>
          <span className="name">Vahan Mkrtumyan</span>
          <span className="post-date">posted date: 05-09-2021</span>
        </div>
        <div className="salary-div">
          <span className="salary">min salary - 1.200.000</span>
          <Tag className="tag" color="#f50">
            Full time
          </Tag>
        </div>
      </div>
      <div className="employeeCard">
        <div className="img-div">
          <img src={user6} alt="user1" />
        </div>
        <div className="central-div">
          <span className="proffesion">React JS developer</span>
          <span className="name">Sargis Pashayan</span>
          <span className="post-date">posted date: 05-09-2021</span>
        </div>
        <div className="salary-div">
          <span className="salary">min salary - inch taq taq</span>
          <Tag className="tag" color="#108ee9">
            internship
          </Tag>
        </div>
      </div>
    </>
  );
}
