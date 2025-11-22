import { useEffect, useState } from "react";

export const useHello = (who: string): string => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch(`http://localhost:3001/sup/${who}`)
            .then((res) => res.json())
            .then((data) => setData(data.message))
            .catch((err) => console.error(err));
    }, []);

    return data;
};
