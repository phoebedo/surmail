const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/key");

const User = mongoose.model("users");


//user => id
passport.serializeUser((user, done) => {
  done(null, user.id);
});
//id => user
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },

    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        googleId: profile.id,
      });
      if (existingUser) {
        //already exist in database
        return done(null, existingUser);
      } else {
        //Add new user to database
        const user = await new User({
          googleId: profile.id,
        }).save();
        done(null, user);
      }
    }
  )
);
