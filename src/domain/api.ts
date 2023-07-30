
import type { TEntry } from './types'
import { ENTRIES_PER_PAGE } from './../constants'

export type TFetchEntries = (page: number) => Promise<Array<TEntry> | undefined>

export const fetchEntries: TFetchEntries = async (page) => {
    const url = 'https://picsum.photos/v2/list'
    const params = new URLSearchParams({ page: page.toString(), limit: ENTRIES_PER_PAGE.toString() })
    const response = await fetch(`${url}?${params}`)

    if (response.ok) {
        return await response.json()
    } else {
        console.warn('server responded with error code') // todo: handle errors
    }
}