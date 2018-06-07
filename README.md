#### Issue details

Adding rollup to our project (as a dependency of systemjs-builder) broke our build, since rollup redefines the signatures of some global functions, like setInterval and setTimeout, through the @types/node package. We're building a client-side SPA, so having runtime functions redefined for a NodeJS context is not great for us. This hasn't been an issue for us in the past, so either rollup was added as a dependency of SystemJS-Builder or @types/node was added to rollup.

How come @types/node is listed as a dependecy of rollup and not as a devDependency?

### Instructions

1. Clone the repo.
2. ```npm/yarn install```
3. ```npm/yarn run build```
4. Check the compiler errors emitted by the TypeScript compiler.
