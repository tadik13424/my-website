const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: 'tadeasujvary0@gmail.com', 
        pass: 'dhal tyci zxmz kjrs',           
      },
    });

    const mailOptions = {
      from: email,
      to: 'tadeasujvary0@gmail.com', 
      subject: `Nová zpráva od ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email byl úspěšně odeslán!');
  } catch (error) {
    res.status(500).send('Něco se pokazilo: ' + error.message);
  }
});

app.listen(3000, () => {
  console.log('Server běží na http://localhost:3000');
});
