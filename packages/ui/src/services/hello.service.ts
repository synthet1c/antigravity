import { cache } from "react";

class _HelloService {

    get = cache(async ({ who }: { who: string }) => {
        return fetch(`http://localhost:3001/sup/${who}`)
            .then(res => res.json())
            .then(data => data.message)
    })

    getHello = cache(async (who: string): Promise<string> => {
        const res = await fetch(`http://localhost:3001/sup/${who}`, {
            cache: "no-store", // optional depending on your use-case
        });

        if (!res.ok) {
            throw new Error("Failed to fetch hello");
        }

        const data = await res.json();
        return data.message;
    });

}

export const HelloService = new _HelloService();