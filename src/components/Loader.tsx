import { ComponentType, useEffect, useRef } from "react";
import { useInfiniteLoading } from "./../hooks/loader";
import { Indicator } from "./atoms/Indicator";
import { SkeletonArmy } from "./atoms/SkeletonArmy";

interface ILoaderProps<T> {
  fetcher: (page: number) => Promise<Array<T> | undefined>;
  List: ComponentType<{ entries: Array<T> }>;
}

export const Loader = <T extends object>({
  fetcher,
  List,
}: ILoaderProps<T>) => {
  const { entries, addEntries } = useInfiniteLoading<T>({ fetcher });
  const trigger = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          addEntries();
        }
      },
      { threshold: 1 },
    );

    if (trigger.current) {
      observer.observe(trigger.current);
    }

    return () => {
      if (trigger.current) {
        observer.unobserve(trigger.current);
      }
    };
  }, [addEntries, trigger]);

  return (
    <>
      <main className="flex flex-col gap-8">
        {entries.length ? <List entries={entries} /> : <SkeletonArmy />}
        <div ref={trigger} />
      </main>

      <footer>
        <Indicator />
      </footer>
    </>
  );
};
