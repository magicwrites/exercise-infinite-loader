import { useEffect, useState } from "react";
import { Preface } from './components/Preface'
import { List } from './components/List'
import type { TEntry } from './domain/types'
import { fetchEntries } from './domain/api'
import { FORCED_WIDTH } from './constants'
import { Indicator } from "./components/Indicator";
import { SkeletonArmy } from "./components/SkeletonArmy";

export const App = () => {
  const [entries, setEntries] = useState<Array<TEntry>>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchEntries()
      .then(entries => {
        setEntries(entries || [])
        setLoading(false)
      })
      .catch(() => {
        console.warn('something went wrong when loading entries') // todo: handle errors
      })
  }, [])

  return (
    <div className="flex flex-col items-center">
      <section className="p-4 sm:p-8 m-auto flex flex-col gap-8 box-content" style={{ maxWidth: FORCED_WIDTH }}>
        <header>
          <Preface />
        </header>

        <main className="flex flex-col gap-8">
          {loading ? <SkeletonArmy /> : <List entries={entries} />}
        </main>

        <footer>
          <Indicator />
        </footer>
      </section>
    </div>
  )
}