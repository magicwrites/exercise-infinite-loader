import { useEffect, useState } from "react";

type TEntry = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const fetchEntries = async (): Promise<Array<TEntry> | undefined> => {
  const page = `${Math.round(Math.random() * 10)}` // for some entertainment
  const url = 'https://picsum.photos/v2/list'
  const params = new URLSearchParams({ page })
  const response = await fetch(`${url}?${params}`)

  if (response.ok) {
    return await response.json()
  } else {
    console.warn('could not list items') // todo: handle errors
  }
}

const IMAGE_WIDTH = 320
const IMAGE_PLACEHOLDER_HEIGHT = 240

const Entry = (props: TEntry) => (
  <div className="flex flex-col gap-2">
    <img className="select-none rounded" src={props.download_url} width={IMAGE_WIDTH} height={IMAGE_PLACEHOLDER_HEIGHT} />
    <div className="text-sm flex justify-between">
      <header>{props.author}</header>
      <a className="underline" href={props.url} target="_blank">source</a>
    </div>
  </div>
)

function App() {
  const [entries, setEntries] = useState<Array<TEntry>>([])

  useEffect(() => {
    fetchEntries()
      .then(entries => setEntries(entries || []))
      .catch(() => {
        // todo: handle errors
      })
  }, [])

  return (
    <div className="flex flex-col items-center">
      <section className="py-8 m-auto flex flex-col gap-8">
        <header>
          <div className="text-xl">Hello visitor</div>
          <div>Enjoy the additictive images!</div>
        </header>

        <main className="flex flex-col gap-8">
          {entries.map(entry => <Entry {...entry} key={entry.id} />)}
        </main>
      </section>
    </div>
  )
}

export default App
