import { JSX, Suspense, use } from "react";
import styles from './hello.module.css'
import { HelloService } from "../services/hello.service";

interface HelloProps {
    who: string;
}

const HelloLoader = () => {
    return <div>Loading...</div>;
}

const HelloRaw = ({ who }: HelloProps): JSX.Element => {
    const hello = use(HelloService.getHello(who));

    return <h3 className={styles.hello}>{hello}</h3>;
}

export const Hello = ({ who }: HelloProps): JSX.Element => {
    return (
        <Suspense fallback={<HelloLoader />}>
            <HelloRaw who={who} />
        </Suspense>
    );
}