require("esbuild")
  .build({
    entryPoints: ["app.jsx"],
    outfile: "out.js",
    bundle: true,
    // minify: true,
    // sourcemap: true,
    // target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  })
  .catch(() => process.exit(1));
