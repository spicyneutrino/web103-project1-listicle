const express = require("express");
const path = require("path");
const protocols = require("./data/protocols");
const { homepage, detailPage, notFoundPage } = require("./views/templates");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/vendor",
  express.static(path.join(__dirname, "node_modules/@picocss/pico/css"))
);

app.get("/", (req, res) => {
  res.send(homepage(protocols));
});

app.get("/protocols/:slug", (req, res, next) => {
  const protocol = protocols.find((p) => p.slug === req.params.slug);
  if (!protocol) return next();
  res.send(detailPage(protocol));
});

app.use((req, res) => {
  res.status(404).send(notFoundPage());
});

app.listen(PORT, () => {
  console.log(`Network Protocol Explorer running at http://localhost:${PORT}`);
});
