"use client";

import styles from "./TechStack.module.css";
import { Dropdown } from "../../../../components/dropdown";
import { Dispatch, SetStateAction, useState } from "react";
import { TechnologyType } from "./technology-type";
import { techItems } from "./tech-items";
import Image from "next/image";

interface TechItemProps {
  name: string;
  path: string;
}

const TechItem = ({ name, path }: TechItemProps) => (
  <li className={styles.gridItem}>
    <span>{name}</span>
    <Image
      className={styles.gridImage}
      src={`/tech-stack-svgs/${path}`}
      height={64}
      width={64}
      alt={`${name} logo`}
    />
  </li>
);

export const TechStack = () => {
  const [filterBy, setFilterBy] = useState(TechnologyType.All);

  /*
    Array of tech stack objects: image, type, label
    filter based on dropdown selector
     */
  return (
    <div className={styles.container}>
      <div className={styles.horizontalFlexBox}>
        <Dropdown
          name="Filter skills by:"
          defaultValue={filterBy}
          setValue={setFilterBy as Dispatch<SetStateAction<string>>}
          options={Object.values(TechnologyType)}
        />
      </div>

      <ul className={styles.gridContainer}>
        {techItems
          .filter(
            ({ type }) => type === filterBy || filterBy === TechnologyType.All,
          )
          .map(({ name, path }, index) => (
            <TechItem key={index} name={name} path={path ?? ""} />
          ))}
      </ul>
    </div>
  );
};
