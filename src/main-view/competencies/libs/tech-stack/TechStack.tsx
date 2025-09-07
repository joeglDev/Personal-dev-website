"use client";

import styles from "./TechStack.module.css";
import { Dropdown } from "@/components";
import { Dispatch, SetStateAction, useState } from "react";
import { TechnologyType } from "./technology-type";

export const TechStack = () => {
  const [filterBy, setFilterBy] = useState(TechnologyType.All);
  console.log(filterBy);

  /*
    Array of tech stack objects: image, type, label
    filter based on dropdown selector
     */
  return (
    <div className={styles.container}>
      <div className={styles.horizontalFlexBox}>
        <p className={styles.text}>I have skills in the following: </p>
        <Dropdown
          name="select to filter technologies by"
          defaultValue={filterBy}
          setValue={setFilterBy as Dispatch<SetStateAction<string>>}
          options={Object.values(TechnologyType)}
        />
      </div>
    </div>
  );
};
