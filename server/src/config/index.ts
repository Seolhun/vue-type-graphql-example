import DEV from './develop';
import PROD from './production';
import TEST from './test';

enum API_SERVER {
  JSON_SERVER = 'http://localhost:3100',
}

class Config {
  static setConfiguration() {
    let env;
    if (process.env.NODE_ENV === 'producton') {
      process.env.NODE_ENV = DEV.NODE_ENV;
      env = DEV;
    } else if (process.env.NODE_ENV === 'test') {
      process.env.NODE_ENV = DEV.NODE_ENV;
      env = DEV;
    } else {
      process.env.NODE_ENV = DEV.NODE_ENV;
      env = DEV;
    }
    console.log('====================================');
    console.log(`process.env.NODE_ENV : ${process.env.NODE_ENV}`);
    console.log('====================================');
    return env;
  }
}

export { Config, API_SERVER };
