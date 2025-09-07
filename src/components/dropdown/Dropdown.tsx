import styles from "./Dropdown.module.css";
import { Dispatch, SetStateAction } from "react";

interface DropdownProps {
  name: string;
  defaultValue: string;
  setValue: Dispatch<SetStateAction<string>>;
  options: string[];
}

export const Dropdown = ({
  name,
  defaultValue,
  setValue,
  options,
}: DropdownProps) => (
  <>
    <select
      className={styles.dropdownSelect}
      name={name}
      defaultValue={defaultValue}
      onChange={(e) => setValue(e.target.value)}
    >
      {options.map((option, index) => (
        <option className={styles.dropdownOption} key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </>
);
