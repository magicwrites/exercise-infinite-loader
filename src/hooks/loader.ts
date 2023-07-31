import { useCallback, useEffect, useRef, useState } from "react";

export const getFirstPage = () => Math.round(Math.random() * 10); // make the application a bit more joyful

export const useInfiniteLoading = <TEntry>({
  fetcher,
}: {
  fetcher: (page: number) => Promise<Array<TEntry> | undefined>;
}) => {
  const [entries, setEntries] = useState<Array<TEntry>>([]);
  const initialized = useRef(false);
  const page = useRef(getFirstPage());

  const addEntries = useCallback(async () => {
    const newEntries = await fetcher(page.current);

    if (newEntries) {
      setEntries((existing) => [...existing, ...newEntries]);
      page.current += 1;
    }
  }, [fetcher]);

  useEffect(() => {
    if (initialized.current) {
      return;
    }

    addEntries();
    initialized.current = true;
  }, [addEntries]);

  return {
    entries,
    addEntries,
  };
};
