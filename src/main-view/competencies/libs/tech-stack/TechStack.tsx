"use client";

import styles from "./TechStack.module.css";
import { Dropdown } from "@/components";
import { Dispatch, SetStateAction, useState } from "react";
import { TechnologyType } from "./technology-type";
import {techItems} from './tech-items';

export const TechStack = () => {
  const [filterBy, setFilterBy] = useState(TechnologyType.All);

  /*
    Array of tech stack objects: image, type, label
    filter based on dropdown selector
     */
  return (
    <div className={styles.container}>
      <div className={styles.horizontalFlexBox}>
        <p className={styles.text}>Filter my technology skills by: </p>
        <Dropdown
          name="select to filter technologies by"
          defaultValue={filterBy}
          setValue={setFilterBy as Dispatch<SetStateAction<string>>}
          options={Object.values(TechnologyType)}
        />


      </div>

        <div className={styles.gridContainer}>
            {
                techItems
                    .filter(({type}) => type === filterBy || filterBy === TechnologyType.All)
                    .map(({name}, index) => <article className={styles.gridItem} key={index}>{name}</article>)
            }
        </div>
    </div>
  );
};
