import { Router } from 'express';

import passport from '../../../config/auth/passport';

const auth_router = Router();
auth_router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

auth_router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  // Successful authentication, redirect home.
  res.redirect('/');
});

auth_router.post('/login', (req, res) => {
  console.log('login');
});

auth_router.post('/logout', (req, res) => {
  console.log('logout');
});

export { auth_router };
