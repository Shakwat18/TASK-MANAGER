const nodemailer = require("nodemailer");
const { MailtrapTransport } = require("mailtrap");

const TOKEN = "1ba0eb0f1bea4efaac5aa357be81caa0";
const sendMail = async (EmailTo, EmailText, EmailSubject) => {
  const transport = Nodemailer.createTransport(
    MailtrapTransport({
      token: TOKEN,
    }),
  );
  const sender = {
    address: "hello@demomailtrap.co",
    name: "Mailtrap Test",
  };

  transport
    .sendMail({
      from: sender,
      to: EmailTo,
      subject: EmailSubject,
      text: EmailText,
    })
    .then(console.log, console.error);
};

module.exports = sendMail;

const Nodemailer = require("nodemailer");
