'use strict';

module.exports = {
  send: async (ctx) => {
    const body= ctx.request.body;
    console.log(ctx.request.body);
    try {
      var info = await strapi.plugins.email.services.email.send({
              to: body.to,
              from: body.from,
              replyTo: '${body.name} <${body.email>',
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
