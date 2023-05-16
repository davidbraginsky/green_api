import styles from "./WelcomePage.module.css";
import { FC, useState } from "react";
import { USER_DATA_SUBMITTED } from "@/features/user/userSlice";
import store from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import type { ApplicationStore } from "@/redux/types/ApplicationStore";
import type { UserData } from "@/redux/types/user/UserData";

const WelcomePage: FC = () => {
  const userData = useSelector<ApplicationStore, UserData>((state) => state.user);
  console.log(userData);

  const { idInstance, apiTokenInstance } = userData;

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    console.dir(e.target);
    dispatch(USER_DATA_SUBMITTED({ idInstance: "test1", apiTokenInstance: "test2" }));
  };
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <input type="text" name="idInstance" placeholder="idInstance" />
        <input type="text" name="apiTokenInstance" placeholder="apiTokenInstance)" />
        <button>submit</button>
      </form>
      <p>idInstance: {idInstance}</p>
      <p>apiTokenInstance: {apiTokenInstance}</p>
    </div>
  );
};

export default WelcomePage;
