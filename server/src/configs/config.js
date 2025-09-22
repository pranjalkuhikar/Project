import dotenv from "dotenv";
config.dotenv();

const _config = {
  PORT: process.env.PORT,
};

const config = Object.freeze(_config);

export default config;
