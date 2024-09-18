import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../user-create/form.module.css";

const UserForm = ({ user, onSave }) => { 
  const [userData, setUserData] = useState({ first_name: "", last_name: "", email: "" });
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      setUserData(user); 
    }
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    onSave(userData);
  };
  
  const closeHandler = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={submitHandler} className={styles["user-form"]}>
      <label htmlFor="first_name">First Name:</label>
      <input
        type="text"
        id="first_name"
        name="first_name"
        value={userData.first_name || ""}
        onChange={handleChange}
        required
      />

      <label htmlFor="last_name">Last Name:</label>
      <input
        type="text"
        id="last_name"
        name="last_name"
        value={userData.last_name || ""}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={userData.email || ""}
        onChange={handleChange}
        required
      />

      <div className={styles["user-form-footer"]}>
        <button
          type="submit"
          className={`${styles["btn"]} ${styles["btn-save"]}`}
        >
          Save
        </button>
        <button
          type="button"
          className={`${styles["btn"]} ${styles["btn-close"]}`}
          onClick={closeHandler}
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default UserForm;
