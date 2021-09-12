import { Tag } from "antd";
import { Link } from "react-router-dom";
export default function EmployeeCard(props) {
  const { name, surname, profession, minimum_wage, job_type, imgUrl } = props;

  return (
    <>
      <Link className="employeeCard" to="/employee-info">
        <div className="img-div">
          <img src={imgUrl} alt="user1" />
        </div>
        <div className="central-div">
          <span className="proffesion">{profession}</span>
          <span className="name">
            {name} {surname}
          </span>
          <span className="post-date">Last updated: 05-09-2021</span>
        </div>
        <div className="salary-div">
          <span className="salary">min salary - {minimum_wage}</span>
          <div>
            <Tag className="tag" color="#87d068">
              {job_type}
            </Tag>
          </div>
        </div>
      </Link>
    </>
  );
}
