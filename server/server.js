import app from "./src/app.js";
import config from "./src/configs/config.js";
import connectDB from "./src/db/db.js";
import logger from "./src/utils/logger.js";

const port = config.PORT;

connectDB();

app.listen(port, () => {
  logger.info(`Server listening on http://localhost:${port}`);
});
