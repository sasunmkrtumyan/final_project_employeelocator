import { useState, useEffect } from "react";
import { firestore } from "../../helpers/libs/firebase.libs";
import EmployeeCard from "../employeeCard/EmployeeCard";

export default function EmployeeList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const docRef = firestore.collection("users");
    docRef
      .get()
      .then((response) => {
        console.log(response);
        const users = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setUsers(users);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
  return (
    <div className="employeeList">
      {users.map((user) => (
        <EmployeeCard {...user} />
      ))}
    </div>
  );
}
