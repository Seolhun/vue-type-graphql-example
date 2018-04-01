import * as passport from 'passport';
import { Strategy } from 'passport-github2';

import DEV_CONFIG from '../environments/develop';

passport.use(new Strategy({
  clientID: DEV_CONFIG.GITHUB_CLIENT_ID,
  clientSecret: DEV_CONFIG.GITHUB_CLIENT_SECRET_ID,
  callbackURL: '/auth/github/callback',
}, (accessToken, refreshToken, profile, done) => {
  console.log('accessToken : ', accessToken);
  console.log('refreshToken : ', refreshToken);
  console.log('profile : ', profile);
  // User.findOrCreate({ githubId: profile.id }, function (err, user) {
  //   return done(err, user);
  // });
}));

export default passport;
