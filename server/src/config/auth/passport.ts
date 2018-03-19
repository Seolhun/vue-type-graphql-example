import * as passport from 'passport';
import { Strategy } from 'passport-github2';

passport.use(new Strategy({
  clientID: '05096350eaddf80dbd34',
  clientSecret: 'a2752bd252c43ef3d93f6ec4ac29533f8ff0a087',
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
