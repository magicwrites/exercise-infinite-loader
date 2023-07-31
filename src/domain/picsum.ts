import { ENTRIES_PER_PAGE, PICSUM_URL } from "./../constants";
import type { TPicsumEntry } from "./picsum.types";

export type TFetchPicsumEntries = (
  page: number,
) => Promise<Array<TPicsumEntry> | undefined>;

export const fetchEntries: TFetchPicsumEntries = async (page) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: ENTRIES_PER_PAGE.toString(),
  });
  const response = await fetch(`${PICSUM_URL}?${params}`);

  if (response.ok) {
    return await response.json();
  } else {
    console.warn("server responded with error code"); // todo: handle errors
  }
};
