import { Entry } from './Entry'
import type { TEntry } from './../domain/types'

export const List = ({ entries }: { entries: Array<TEntry> }) => (
  <>
    {entries.map(entry => <Entry author={entry.author} image={entry.download_url} href={entry.url} key={entry.id} />)}
  </>
)