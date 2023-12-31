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

Also, [an article](https://www.developerway.com/posts/react-component-as-prop-the-right-way) which I have found useful when it comes to rendering a bit more dynamic and configurable lists.

## Testing strategy

I consider the application as done when:

- all the objectives are met
- the application and the code looks reasonably well
- the application is deployed online
- the application works on on 300px viewport width resolution and above on chrome

## Known flaws

The code contains some shortcomings, intentionally left out:

- the list just keeps on growing, eventually the browser will die out, there is no "clean up" code or virtualisation in place to take care of that
- the list could make a better use of high resolution screens, but that would complicate things significantly and responsivity was not a requirement
- loader relies on [`<T extends object>`](https://stackoverflow.com/a/53958176), I am not really sure whether I did it right
- there is an edge case when sometimes the loading fails to trigger as you refresh the page while half-way through the scrolling

## Next steps

Given another set of 8 hours, I would:

- add a storybook for all the "atoms" in the components directory (skipped for now, it adds quite a lot of dependencies)
- add prettier as a development static code analysis and formatting tool (should be there from the start really)
- moved constants to environmental variables, `.env.sample` would suit this application better
- reconsider whether there is a better way to configure how rendering of items should work
- attempt to fix the known flaws

## Time spent: 8h

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

### Implementation 3h 45m

- 15m on initial loading state
- 1h for the infinite scroll mechanics, including memoization for the list entries
- v1.0.0 🎉
- 15m on moving some constants to better locations, [updates on flaws](#known-flaws)
- 15m on adding a missing "generic" API loader requirement and moving some files around
- v1.1.0
- 15m on marking the objectives as done, final review of the task itself
- 1h 30m on actually building the Loader component 😱 addressing the configurable rendering part
- 15m on moving things around in directories for arguably more intuitive splits
- v1.2.0 🎉

### Refinement 30m

- 15m to update docs, run prettier
- v1.2.1
- 15m on lint errors, notably added useCallback for the hook, covered an edge case with more unique list item keys
- v1.2.2 🎉 good enough?
