const user = require("../models/UserModel")

exports.auth_register = async (req, res) => {
  //TODO: Register func.

  const { firstName, lastName, email, password } = req.body;
  const User = await user.create({
      firstName,
      lastName,
      email,
      password
  })
  res.json({
      data:User
  })
  console.log(User)
  //TODO1: Validate the fields
  //TODO2: Already registered
  //TODO3: crpyt password
  //TODO4: save the user

  res.send("Register Completed.");
};

exports.auth_login = (req, res) => {
  // TODO: Auth.
  // TODO: Login func.
  res.send("Login Completed");
};