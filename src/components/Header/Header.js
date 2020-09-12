import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import logoImage from "../../assets/images/logoMT.svg";
import Button from "../Button/Button";
import styles from "./Header.module.scss";

const Header = ({ openModalFn }) => {
  return (
    <header className={styles.wrapper}>
      <img src={logoImage} alt="FavNote Logo" />
      <HeaderNavigation></HeaderNavigation>
      <Button onClick={openModalFn} secondary>
        new item
      </Button>
    </header>
  );
};

export default Header;
