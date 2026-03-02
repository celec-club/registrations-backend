const { PORT } = require("./src/config/env");
const app = require("./src");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});