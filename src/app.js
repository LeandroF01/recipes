const express = require("express");
const db = require("./utils/database");
const cors = require("cors");
const { port } = require("./config");
const userRouter = require("./users/router/users.router");
const authRouter = require("./auth/auth.router");
const categoryRouter = require("./categories/router/categories.router");
const recipeRouter = require("./recipes/router/recipes.router");
const ingredientRouter = require("./ingredients/router/ingredients.router");
const instructionsRouter = require("./instructions/router/instructions.router");
const typesRouter = require("./types/router/types.router");
const initModels = require("./models/initModels");

const app = express();

app.use(express.json());

app.use(cors());

db.authenticate()
  .then(() => {
    console.log("Database Authenticated");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("Database Synced");
  })
  .catch((err) => {
    console.log(err);
  });

initModels();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "OK!",
    users: `localhost:${port}/api/v1/users`,
  });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/recipes", recipeRouter);
app.use("/api/v1/ingredients", ingredientRouter);
app.use("/api/v1/instructions", instructionsRouter);
app.use("/api/v1/types", typesRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
