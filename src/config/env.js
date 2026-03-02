const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

module.exports = {
  PORT: Number(process.env.PORT) || 9800,
  DATABASE_URL:
    process.env.NODE_ENV === "production"
      ? process.env.DATABASE_URL_DEPLOY
      : process.env.DATABASE_URL,
};
