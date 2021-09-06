const fs = require('fs');
const nodemailer = require('nodemailer');
const credentials = require('../gmail.json');
const html = fs.readFileSync('./dist/index.html', {encoding: 'utf8'});

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'maringahackerspace@gmail.com',
    pass: credentials.password,
  },
});

transporter.sendMail({
  from: '"Hackerspace Maringá" <maringahackerspace@gmail.com>',
  to: "karistonf@gmail.com",
  subject: "Newsletter Test",
  html,
}).then(info => {
  console.log({info});
}).catch(console.error);
