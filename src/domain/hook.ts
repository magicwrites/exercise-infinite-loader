import { useEffect, useRef, useState } from "react";
import { fetchEntries } from "./api";
import { getFirstPage } from "./math";
import type { TEntry } from "./types";

export const useInfiniteLoading = () => {
    const [entries, setEntries] = useState<Array<TEntry>>([])
    const initialized = useRef(false);
    const page = useRef(getFirstPage());

    const addEntries = async () => {
        const newEntries = await fetchEntries(page.current);

        if (newEntries) {
            setEntries(existing => [...existing, ...newEntries]);
            page.current += 1
        }
    };

    useEffect(() => {
        if (initialized.current) {
            return;
        }

        addEntries();
        initialized.current = true
    }, [addEntries])

    return {
        entries,
        addEntries
    };
}