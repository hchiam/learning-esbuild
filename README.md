# Learning [`esbuild`](https://github.com/evanw/esbuild)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

<https://github.com/evanw/esbuild>

Faster than [parcel](https://github.com/hchiam/learning-parcel), [webpack](https://github.com/hchiam/learning-webpack), and rollup? Without cache?

<https://esbuild.github.io/getting-started>

## From scratch

This is an example using `react` and `react-dom`.

Using [`yarn`](https://github.com/hchiam/learning-yarn):

```bash
yarn add esbuild react react-dom
./node_modules/.bin/esbuild --version
```

Or with `npm`:

```bash
npm install esbuild react react-dom
./node_modules/.bin/esbuild --version
```

And then create a file app.jsx and then run this:

```bash
./node_modules/.bin/esbuild app.jsx --bundle --outfile=out.js --define:process.env.NODE_ENV=\"production\"
node out.js # <h1 data-reactroot="">Hello, world!</h1>
```

## Starting by testing out this repo <!-- Replace "template"s and "# and then ..."s in this section -->

Using [`yarn`](https://github.com/hchiam/learning-yarn): (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-template.git && cd learning-template && yarn;
yarn build
```

Or with `npm`: (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-template.git && cd learning-template && npm install;
npm run build
```

Running the package.json script with `yarn build` or `npm run build` can get hard to read when you pass many options to `esbuild`, so you could run a JS file instead:

```bash
node more-sophisticated-build.js
```
