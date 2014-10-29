* Using in-browser JSX
 * JSX is almost like HTML, which makes it easy to see the document structure
 * Can also include React components directly (DetailList, DetailRow)
 * For production, pre-transform the JSX to JS
* Everything is declarative based on `props` or `state`
* No jQuery selectors anywhere
 * How would you do this with just jQuery? Class name on each cell, something like that with a loop over `$(".class")`
* Composition is used to build up the page
 * Each piece is made of smaller pieces
 * Can be hard to visualize the whole HTML structure, but makes working with/reasoning about the whole thing easier.
 * Using JSX helps - it looks like the HTML output
* Development build of React gives a lot of warnings (with links to fixes)
