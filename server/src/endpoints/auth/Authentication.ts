import passport from '../../common/auth/passport';

export default (app) => {
  app.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

  app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
};
