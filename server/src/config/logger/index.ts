import * as winston from 'winston';

const LOG_DIR = `${__dirname}/logs`;
const tsFormat = () => (new Date()).toLocaleTimeString();

const logger = winston.createLogger({
  level: process.env.NODE_ENV !== 'development' ? 'debug' : 'info',
  format: winston.format.json(),
  timestamp: new Date(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: `${LOG_DIR}/error.log`, level: 'error' }),
    new winston.transports.File({ filename: `${LOG_DIR}/debug.log`, level: 'debug' }),
    new winston.transports.File({ filename: `${LOG_DIR}/info.log`, level: 'info' }),
    new winston.transports.File({ filename: `${LOG_DIR}/combined.log` }),
  ],
});

export { logger };
