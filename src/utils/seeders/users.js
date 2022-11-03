const uuid = require("uuid");
const { faker } = require("@faker-js/faker");

const Users = require("../../models/users.models");

Users.create({
  id: "39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9",
  firstName: "Admin",
  lastName: "Root",
  email: "admin@admin.com",
  password: "root",
  role: "admin",
  phone: "12341234",
  birthday: "2000/10/22",
});
