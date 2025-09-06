'use client';

import {useEffect, useRef, useState} from "react";
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
    const labelRef = useRef<HTMLLabelElement>(null);

    useEffect(() => {
        if (isChecked) {
            onToggleOn()
        } else {
            onToggleOff();
        }
    }, [isChecked, onToggleOn, onToggleOff]);

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Space') {
            e.preventDefault();
            setIsChecked((prevState) => !prevState)
        }
    }

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
                ref={labelRef}
                className={`${styles['react-switch-label']} ${isChecked ? styles['react-switch-label-on'] : styles['react-switch-label-off']}`}
                htmlFor={`react-switch-new`}
                tabIndex={0}
                onKeyDown={(e) => onKeyDown(e as unknown as KeyboardEvent)}
                aria-label={"toggle light and dark mode"}
                aria-keyshortcuts={"Enter"}
            >
                <span className={styles['react-switch-button']} />
            </label>
        </>
    );
}