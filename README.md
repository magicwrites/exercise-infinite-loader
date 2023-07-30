## Quick start

You have a few options:

- you can go to the [online demo](https://inifinite-loader.mazur.site)
- you can just clone this repo and run `npm install` followed by `npm run dev` on node version `18.x`

Also note:

- [the objectives of this exercise](./OBJECTIVE.md) are available in a separate document

## Implementation strategy

Resources that I have found useful in addressing the challenge:

- related existing solutions: [react-window-infinite-loader](https://www.npmjs.com/package/react-window-infinite-loader), [react-virtualized](https://github.com/bvaughn/react-virtualized/blob/master/docs/creatingAnInfiniteLoadingList.md)
- [3 ways of implementing infinite scroll](https://blog.logrocket.com/3-ways-implement-infinite-scroll-react/), a very good summary
- [a performance focused article from 2019](https://betterprogramming.pub/build-high-performance-infinite-lists-in-react-a53c0899a211), partially useful
- [an article from 2021 with focus on react hooks](https://blog.logrocket.com/react-hooks-infinite-scroll-advanced-tutorial/), insightful, a bit of an overkill at times

After a lecture of the above, I decided to base my solution on intersection observer API. Without explicit expectation to handle a lot of records ([unlike here](https://github.com/magicwrites/casumo-list/blob/master/OBJECTIVE.md#casumo-loves-lists)), I decided to keep it simple and avoid going into [virtualized](https://github.com/bvaughn/react-virtualized/blob/master/docs/creatingAnInfiniteLoadingList.md) solution. However, [memoization](https://stackoverflow.com/questions/73265434/react-infinite-scroll-how-to-not-re-render-previous-items) as an optimisation technique could be useful so I will return to the concept once the basic implementation is running.

## Testing strategy

`// todo`

## Known flaws and next steps

`// todo`

## Time spent: 3h 45m

### Preparations: 2h

- 15m on reading the task
- 15m on getting the repository and readme docs in place
- 15m on research and filtering out [useful web resources](#implementation-strategy) from the [silly ones](https://dev.to/garryxiao/react-infinite-loader-with-typescript-idb)
- 45m on going through the abovementioned resources ☕️📚 and defining implementation strategy
- 30m for a bio break after an exhausting, focus intense analysis 🌴

### Code setup 1h 45m

- 30m on vite, react, tailwind, favicon, fontsource, domain and vercel deployment setup
- 30m on initial CSS for the website
- 45m on refinement: extracting the smaller components, variables and adding loading indicators
- v0.1.0 🎉

### Implementation

- 15m on initial loading state

### Refinement

`// todo`