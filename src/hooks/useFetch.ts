import { useState, useEffect } from "react";

import { Pokemon } from "../interfaces/interfaces";

export const useFetch = (url: string) => {
    const [data, setData] = useState<Pokemon>();

    async function get(apiUrl: string) {
        const response = await fetch(apiUrl);
        const data = response.json();
        console.log(data);
    }

    useEffect(() => {
        get(url);
    }, [])
}
