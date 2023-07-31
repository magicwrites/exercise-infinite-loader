import { useEffect, useRef, useState } from "react";

export const getFirstPage = () => Math.round(Math.random() * 10) // make the application less stagnant

export const useInfiniteLoading = <TItem>({ fetcher }: { fetcher: (page: number) => Promise<Array<TItem> | undefined> }) => {
    const [entries, setEntries] = useState<Array<TItem>>([])
    const initialized = useRef(false);
    const page = useRef(getFirstPage());

    const addEntries = async () => {
        const newEntries = await fetcher(page.current);

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