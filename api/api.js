module.exports = function (params) {
  const api = params.api;
  const User = require("../models/user")
  const bcrypt = require("bcrypt")
  const jwt = require("jsonwebtoken")

  api.post("/register", async (req, res) => {
    const user = new User(req.body);
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      user.password = hash;
      await user.generateAuthToken();
      user.save((err) => {
        if (err) {
          res.status(400).json({
            message: err,
            status: "-1",
          });
        } else {
          res.status(201).json({
            token: user.token,
            message: "Account Registered",
            status: "1",
          });
        }
      });
    });
  });

  api.post("/login", async (req, res) => {
    try {
      const { name, password } = req.body;

      User.findOne(
        {
          name: name,
        },
        async (err, user) => {
          if (err) {
            res.status(400).json({
              status: "0",
              error: "Login Failed! Check details and try again",
            });
            return;
          }
          if (user) {
            var isPasswordMatch = await user.authenticate(name, password);
            if (isPasswordMatch) {
              await user.generateAuthToken();
              res.json({
                status: "1",
                token: user.token,
                name: user.name,
              });
            } else {
              res.status(200).json({
                status: "0",
                error: "Login Failed! Check details and try again",
              });
            }
          } else {
            res.json({
              status: "0",
              message: "Invalid credentials",
            });
          }
        }
      );
    } catch (error) {
      res.status(400).json({
        status: "-1",
        message: error,
      });
    }
  });
};
