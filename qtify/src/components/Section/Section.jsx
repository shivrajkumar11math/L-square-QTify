import React, { useState } from "react";
import styles from "./Section.module.css";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";

const Section = ({
  // data,
  title,
  type,
  // filteredData = null,
  filteredDataValues = [],
  toggleRequired = false,
  value = 0,
  handleChange = null,
}) => {
  // console.log("filteredDataValues inside Section : ", filteredDataValues);
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {toggleRequired ? (!toggle ? "Collapse" : "Show All") : null}
        </h4>
      </div>

      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : // null
      null}

      {filteredDataValues.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardsWrapper}>
          {!toggle ? (
            <div className={styles.wrapper}>
              {filteredDataValues.map((ele) => (
                <Card data={ele} type={type} key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filteredDataValues}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
