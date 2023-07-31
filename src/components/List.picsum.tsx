import { Entry } from './atoms/Entry'
import type { TPicsumEntry } from './../domain/picsum.types'

export const List = ({ entries }: { entries: Array<TPicsumEntry> }) => (
  <>
    {entries.map(entry => <Entry author={entry.author} image={entry.download_url} href={entry.url} key={entry.id} />)}
  </>
)