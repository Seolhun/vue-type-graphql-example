import { Router } from 'express';

import { passport } from '../../../config/auth/passport';

const user_router = Router();

user_router.get('/current', (req, res) => {
  res.send(req.user);
});

export { user_router };
