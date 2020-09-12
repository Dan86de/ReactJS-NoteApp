import React from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./ListWrapper.module.scss";

const ListWrapper = ({ items }) => (
  <>
    {items.length ? (
      <ul className={styles.wrapper}>
        {items.map((item) => (
          <ListItem key={item.title} {...item} />
        ))}
      </ul>
    ) : (
      <h1 className={styles.noItems}>
        There is nothing there yet, please add some items !!
      </h1>
    )}
  </>
);

export default ListWrapper;
