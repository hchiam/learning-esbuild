require("esbuild")
  .build({
    entryPoints: ["app.jsx"],
    outfile: "out.js",
    bundle: true,
    // minify: true,
    // sourcemap: true,
    // target: ["node10.4", "chrome58", "firefox57", "safari11", "edge16"],
    // external: ["fsevents"],
    define: {
      "process.env.NODE_ENV": '"production"',
    },
  })
  .catch(() => process.exit(1));
