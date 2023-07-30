import { useEffect, useState } from "react";
import { Preface } from './components/Preface'
import { Entry } from './components/Entry'
import type { TEntry } from './domain/types'
import { fetchEntries } from './domain/api'
import { FORCED_WIDTH } from './constants'
import { Indicator } from "./components/Indicator";

export const App = () => {
  const [entries, setEntries] = useState<Array<TEntry>>([])

  useEffect(() => {
    fetchEntries()
      .then(entries => setEntries(entries || []))
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
          {entries.map(entry => <Entry author={entry.author} image={entry.download_url} href={entry.url} key={entry.id} />)}
        </main>

        <footer>
          <Indicator />
        </footer>
      </section>
    </div>
  )
}