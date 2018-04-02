import { Router } from 'express';

import { passport } from '../../../config/auth/passport';

const auth_router = Router();
auth_router.get('/', (req, res) => {
  res.send('Hello Authentication Rotuer');
});

auth_router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

auth_router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
});

auth_router.get('/google', passport.authenticate('github', { scope: [ 'profile', 'email' ] }));

auth_router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
});

// Manual Log-In & Singn-Up
auth_router.post('/login', (req, res) => {
  res.send(req.user);
});

auth_router.get('/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});

export { auth_router };
