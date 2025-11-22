"use client"

import { JSX } from "react";
import { useHello } from "../hooks";
import styles from './hello.module.css'

interface HelloProps {
    who: string;
}

export const Hello = ({ who }: HelloProps): JSX.Element => {
    const hello = useHello(who);

    return <h1 className={styles.hello}>Hello: {hello}</h1>;
}