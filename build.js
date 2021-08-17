import * as esbuild from "esbuild";

esbuild.build({
  entryPoints: ["index.js"],
  outfile: "gosling-embed.js",
  format: "esm",
  bundle: true,
  loader: { ".css": "text" },
  minify: process.env.NODE_ENV === "production",
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
});
