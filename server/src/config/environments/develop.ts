import { SettingEnvironments } from './';

export default {
  NODE_ENV: 'development',
  EXPRESS_PORT: 4000,

  // Session Key
  COOKIE_SESSION_MAX_AGE: 1000 * 60 * 60 * 24 * 30,
  COOKIE_SESSION_KEYS: ['seolhun-hicord-examples'],
  SESSION_MAX_AGE: 1000 * 60 * 30,
  SESSION_KEYS: ['seolhun-hicord-examples'],

  // Oauth2
  FACEBOOK_CLIENT_ID: '',
  FACEBOOK_CLIENT_SECRET_ID: '',
  GITHUB_CLIENT_ID: '05096350eaddf80dbd34',
  GITHUB_CLIENT_SECRET_ID: '773371ce78f5f2578873f75f202759c0b28b85e0',
  GOOGLE_CLIENT_ID: '',
  GOOGLE_CLIENT_SECRET_ID: '',
} as SettingEnvironments;
