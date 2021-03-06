const router = require("express").Router();

const routes = ["users", "session", "recipes", "instructions", "ingredients"];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
