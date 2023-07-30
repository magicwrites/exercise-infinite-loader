import { useEffect, useRef } from "react";
import { useInfiniteLoading } from "./domain/hook";
import { Preface } from './components/Preface'
import { List } from './components/List'
import { FORCED_WIDTH } from './constants'
import { Indicator } from "./components/Indicator";
import { SkeletonArmy } from "./components/SkeletonArmy";

export const App = () => {
  const { entries, addEntries } = useInfiniteLoading();
  const trigger = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          addEntries()
        }
      },
      { threshold: 1 }
    );

    if (trigger.current) {
      observer.observe(trigger.current);
    }

    return () => {
      if (trigger.current) {
        observer.unobserve(trigger.current);
      }
    };
  }, [trigger])

  return (
    <div className="flex flex-col items-center">
      <section className="p-4 sm:p-8 m-auto flex flex-col gap-8 box-content" style={{ maxWidth: FORCED_WIDTH }}>
        <header>
          <Preface />
        </header>

        <main className="flex flex-col gap-8">
          {entries.length ? <List entries={entries} /> : <SkeletonArmy />}
          <div ref={trigger} />
        </main>

        <footer>
          <Indicator />
        </footer>
      </section>
    </div>
  )
}