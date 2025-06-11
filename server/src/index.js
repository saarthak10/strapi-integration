'use strict';

const { Server } = require("socket.io");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
    bootstrap({ strapi }) {
    const server = strapi.server.httpServer;

    const io = new Server(server, {
      cors: {
        origin: "*", // Replace with your frontend URL in production
        methods: ["GET", "POST"],
      },
    });

    strapi.io = io;

    io.on("connection", (socket) => {
      console.log("Frontend connected via socket:", socket.id);
    });
  },
};
