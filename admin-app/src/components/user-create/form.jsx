import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";

const UserForm = ({ user, onSave }) => {
  const [userData, setUserData] = useState({ name: "", job: "" });
  const navigate = useNavigate();

  useEffect(() => {
    setUserData(user);
  }, [user]);


  const submitHandler = (e) => {
    e.preventDefault();
    onSave(userData);
  };
  const closeHandler = () => {
    navigate(-1)
  };

  const handleChange  = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitHandler} className={styles["user-form"]}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={userData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="job">Job:</label>
      <input
        type="text"
        id="job"
        name="job"
        value={userData.job}
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
