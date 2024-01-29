import React from "react";
import LogoImage from "../../assets/logoImage.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <img
      className={styles.logo}
      src={LogoImage}
      alt="logo"
      width={67}
      height={34}
    />
  );
};

export default Logo;
