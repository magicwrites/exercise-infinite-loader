
import { ENTRIES_PER_PAGE, IMAGES_URL } from './../constants'

export type TEntry = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

export type TFetchEntries = (page: number) => Promise<Array<TEntry> | undefined>

export const fetchEntries: TFetchEntries = async (page) => {
    const params = new URLSearchParams({ page: page.toString(), limit: ENTRIES_PER_PAGE.toString() })
    const response = await fetch(`${IMAGES_URL}?${params}`)

    if (response.ok) {
        return await response.json()
    } else {
        console.warn('server responded with error code') // todo: handle errors
    }
}