import { Entry } from "./atoms/Entry";
import type { TCatEntry } from "./../domain/catapi.types";

export const List = ({ entries }: { entries: Array<TCatEntry> }) => (
  <>
    {entries.map((entry) => (
      <Entry image={entry.url} href={entry.url} key={entry.id + entry.url} />
    ))}
  </>
);
