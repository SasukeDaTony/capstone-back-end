const app = require("./app");

const PORT = process.env.PORT || "3100";

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});