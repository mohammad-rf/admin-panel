import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";
// import { initUser } from "./constants";

const UserForm = ({ user, onSave }) => {
  const [data, setData] = useState();
  // console.log(user)
  // console.log(data)

  useEffect(() => {
    setData(user);
  }, [user]);

  const navigate = useNavigate();
  // console.log(data)

  const submitHandler = (e) => {
    e.preventDefault();
    onSave(data);
  };
  const closeHandler = () => {
    // navigate(-1)
    navigate("/users");
  };

  const changeHabdler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitHandler} className={styles["user-form"]}>
     

      {/* <label htmlFor="user-name">ٍemail</label>
      <input
        type="text"
        id="user-name"
        name="username"
        value={data.email}
        onChange={changeHabdler}
      /> */}

      {/* <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        value={data.email}
        onChange={changeHabdler}
      /> */}

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
