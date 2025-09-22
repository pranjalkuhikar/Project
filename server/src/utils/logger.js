const formatMessage = (level, message) => {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level}] ${message}`;
};

const logger = {
  info: (message) => {
    console.log(formatMessage("INFO", message));
  },
  error: (error) => {
    const message =
      typeof error === "string" ? error : error?.stack || String(error);
    console.error(formatMessage("ERROR", message));
  },
  warn: (message) => {
    console.warn(formatMessage("WARN", message));
  },
};

export default logger;
