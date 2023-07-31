
import { ENTRIES_PER_PAGE, CATAPI_URL } from './../constants'
import { TCatEntry } from './catapi.types'

export type TFetchCatEntries = (page: number) => Promise<Array<TCatEntry> | undefined>

export const fetchEntries: TFetchCatEntries = async (page) => {
    const params = new URLSearchParams({ page: page.toString(), limit: ENTRIES_PER_PAGE.toString() })
    const response = await fetch(`${CATAPI_URL}?${params}`)

    if (response.ok) {
        return await response.json()
    } else {
        console.warn('server responded with error code') // todo: handle errors
    }
}