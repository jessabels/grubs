"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Demo",
          lastName: "User",
          email: "demo@demo.com",
          hashedPassword: bcrypt.hashSync("123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Nico",
          lastName: "Poblano",
          email: "Nico@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Boyd",
          lastName: "Wallace",
          email: "Boyd@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Mikey",
          lastName: "Maroni",
          email: "Mikey@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jerry",
          lastName: "Seinfeld",
          email: "Jerry@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "George",
          lastName: "Costanza",
          email: "George@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Elaine",
          lastName: "Benez",
          email: "Elaine@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Newman",
          lastName: "Stein",
          email: "Newman@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Cosmo",
          lastName: "Kramer",
          email: "Kramer@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Alejandro",
          lastName: "Larumbe",
          email: "Alejandro@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Peter",
          lastName: "Kang",
          email: "Peter@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Yuka",
          lastName: "Moribe",
          email: "Yuka@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ryan",
          lastName: "Black",
          email: "Ryan@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Stefan",
          lastName: "Abels",
          email: "Stefan@test.com",
          hashedPassword: bcrypt.hashSync("password123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
