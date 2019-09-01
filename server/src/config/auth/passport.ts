import passport from "passport";
import facebook from "passport-facebook";
import github from "passport-github2";
import google from "passport-google-oauth20";

import DEV_CONFIG from "../environments/develop";

import { UserService } from "../../app/services";
import { User } from "../../app/types";

const user_service = new UserService();

passport.serializeUser((user: User, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: number, done) => {
  user_service.findOne({ id }).then(user => {
    if (user) {
      done(null, user);
    }
  });
});

// Github
passport.use(
  new github.Strategy(
    {
      clientID: DEV_CONFIG.GITHUB_CLIENT_ID,
      clientSecret: DEV_CONFIG.GITHUB_CLIENT_SECRET_ID,
      callbackURL: "/auth/github/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("=======Github profile========");
      console.log(profile);
      console.log("===============");
      user_service
        .findOne({
          id: profile.id,
          name: profile.username,
          github_id: profile.id
        })
        .then(existing_user => {
          if (existing_user) {
            done(null, existing_user);
          } else {
            user_service
              .createdUserWithOauth2({
                email: profile.email,
                name: profile.username,
                github_id: profile.id
              })
              .then(user => {
                done(null, user);
              });
          }
        });
    }
  )
);

// Google
passport.use(
  new google.Strategy(
    {
      clientID: DEV_CONFIG.GITHUB_CLIENT_ID,
      clientSecret: DEV_CONFIG.GITHUB_CLIENT_SECRET_ID,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("=======Google profile========");
      console.log(profile);
      console.log("===============");
      user_service
        .findOne({
          email: profile.email,
          name: profile.username,
          google_id: profile.id
        })
        .then(existing_user => {
          if (existing_user) {
            done(null, existing_user);
          } else {
            user_service
              .createdUserWithOauth2({
                email: profile.email,
                name: profile.username,
                google_id: profile.id
              })
              .then(user => {
                done(null, user);
              });
          }
        });
    }
  )
);

// Facebook
passport.use(
  new facebook.Strategy(
    {
      clientID: DEV_CONFIG.GITHUB_CLIENT_ID,
      clientSecret: DEV_CONFIG.GITHUB_CLIENT_SECRET_ID,
      callbackURL: "/auth/facebook/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("=======Facebook profile========");
      console.log(profile);
      console.log("===============");
      user_service
        .findOne({
          email: profile.email,
          name: profile.username,
          facebook_id: profile.id
        })
        .then(existing_user => {
          if (existing_user) {
            done(null, existing_user);
          } else {
            user_service
              .createdUser({
                email: profile.email,
                name: profile.username,
                facebook_id: profile.id
              })
              .then(user => {
                done(null, user);
              });
          }
        });
    }
  )
);

export { passport };
