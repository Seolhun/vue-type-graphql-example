import DEV from "./develop";
import PROD from "./production";
import TEST from "./test";

interface SettingEnvironments {
  NODE_ENV: string;
  EXPRESS_PORT: number;

  // Session Key
  COOKIE_SESSION_MAX_AGE: number;
  COOKIE_SESSION_KEYS: string[];
  SESSION_MAX_AGE: number;
  SESSION_KEYS: string[];

  // Oauth2
  FACEBOOK_CLIENT_ID?: string;
  FACEBOOK_CLIENT_SECRET_ID?: string;
  GITHUB_CLIENT_ID?: string;
  GITHUB_CLIENT_SECRET_ID?: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET_ID?: string;
}

class Config {
  static setConfiguration(): SettingEnvironments {
    let env;
    if (process.env.NODE_ENV === "producton") {
      process.env.NODE_ENV = DEV.NODE_ENV;
      env = DEV;
    } else if (process.env.NODE_ENV === "test") {
      process.env.NODE_ENV = DEV.NODE_ENV;
      env = TEST;
    } else {
      process.env.NODE_ENV = DEV.NODE_ENV;
      env = PROD;
    }
    console.log("===============config/index.ts=====================");
    console.log(`process.env.NODE_ENV : ${process.env.NODE_ENV}`);
    console.log("====================================");
    return env;
  }
}

export { Config, SettingEnvironments };
