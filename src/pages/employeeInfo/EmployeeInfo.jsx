import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../helpers/libs/firebase.libs";

export default function EmployeeInfo() {
  const [cardData, setCardData] = useState("");

  let { uid } = useParams();
  useEffect(() => {
    const docRef = firestore.collection("users").doc(uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const cardData = doc.data();
          setCardData(cardData);
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log({ cardData });
  return (
    <div className="container">
      <div className="employeeInfo">
        <h1 className="userName">
          {cardData.name} {cardData.surname}
        </h1>
        <div className="contact">
          <div className="backgr">
            <img className="userImage" src={cardData.imgUrl} alt="userImage" />
          </div>

          <div>
            <p className="span pink">
              <span> Email- </span>
              {cardData.email}
            </p>
            <p className="span">
              <span>Phone number- </span>
              {cardData.phone}
            </p>
            <p className="span pink">
              <span> Profession- </span>
              {cardData.profession}
            </p>
            <p className="span">
              <span>Region- </span>
              {cardData.region}
            </p>
            <p className="span pink">
              <span> Job type- </span>
              {cardData.job_type}
            </p>
            <p className="span ">
              <span>Min salary- </span>
              {cardData.minimum_wage}
            </p>
            <p className="span pink">
              <span> Experiance- </span>
              {cardData.experience}
            </p>
            <p className="span">
              <span>Portfolio link- </span>
              <a href={cardData.portfolio_link}>link</a>
            </p>
            <p className="span pink">
              <span> CV- </span>
              <a href={cardData.CVUrl}>CV link</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
