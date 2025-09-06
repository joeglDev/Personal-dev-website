'use client';

import {useEffect, useState} from "react";
import styles from './Switch.module.css';

interface SwitchProps {
    initialState: boolean;
    onToggleOn: () => void;
    onToggleOff: () => void;
}

/*
test - initial state on / off
test - can toggle
test - can call on toggle on change
 */
export const Switch = ({initialState, onToggleOn, onToggleOff}: SwitchProps) => {
    const [isChecked, setIsChecked] = useState(initialState);

    useEffect(() => {
        if (isChecked) {
            onToggleOn()
        } else {
            onToggleOff();
        }
    }, [isChecked, onToggleOn, onToggleOff]);

    return (
        <>
            <input
                checked={isChecked}
                onChange={() => setIsChecked((prevState) => !prevState)}
                className={styles['react-switch-checkbox']}
                type="checkbox"
                id={`react-switch-new`}
            />
            <label
                className={`${styles['react-switch-label']} ${isChecked ? styles['react-switch-label-on'] : styles['react-switch-label-off']}`}
                htmlFor={`react-switch-new`}
            >
                <span className={styles['react-switch-button']} />
            </label>
        </>
    );
}