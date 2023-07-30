
import type { TEntry } from './types'

export const fetchEntries = async (): Promise<Array<TEntry> | undefined> => {
    const page = `${Math.round(Math.random() * 10)}` // keep it fresh on reloads to avoid boredom
    const url = 'https://picsum.photos/v2/list'
    const params = new URLSearchParams({ page })
    const response = await fetch(`${url}?${params}`)

    if (response.ok) {
        return await response.json()
    } else {
        console.warn('server responded with error code') // todo: handle errors
    }
}