'use strict';

module.exports = {
  send: async (ctx) => {
    const body= ctx.request.body;
    console.log(ctx.request.body);
    try {
      var info = await strapi.plugins.email.services.email.send({
              to: 'bleek@cross-solution.de', // Well make this configurable via .env
              from: 'bleek@cross-solution.de', // Well make this configurable via .env
              replyTo: 'no-reply@me.com',
              subject: 'Hello',
              text: `This is ${body.name}. Mail was sent by <${body.email}>`,
              html: body.message
            });
      console.log(info);
      ctx.send({ status: "success", message: "successfully!!!", data: info });
    }
    catch (err) {
      console.log(err);
      ctx.send({ status: "error", message: "failed", data: err });
      // ctx.send('error');
    }

  }
};
