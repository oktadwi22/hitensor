import nodemailer from "nodemailer";

const email = "notice@hitensor.net";
const pass = "Admin@22";

export const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
  },

  auth: {

      user: email,
      pass: pass
  }
});

export const mailOptions = {
  from: email,
  to: email,
};
