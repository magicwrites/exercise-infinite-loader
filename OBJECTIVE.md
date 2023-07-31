## Technical Challenge

Create an infinite loader component, with the following requirements:

- The code should be written in Typescript, using the latest React paradigms. `// functional rather than class components`
- The infinite loader should be generic:
  - it needs to work with any API which supports pagination `// generic types + fetcher function on a hook`
  - it needs to be able to render any kind of content the consumer of the component requires. `// higher order component? In the end I relied on props to pass a rendering component`
- On scrolling to the end of the view, it should fetch and render the next results. `// intersection observer API `
- The component needs to take performance into consideration. `// memoize the item rendering`

Additional notes:

- Writing tests is not a requirement here.
- You can share the result in any place that works for you (github link, code sandbox etc)
- This does not need to be a production ready component, aside from implementing the requirements, mentioning any additional options you would bake into the component, and how, is enough.
- You could use any API you want, but if you’re out of ideas (we could reformulate this part with out of ideas), you could use this one: https://picsum.photos/v2/list
