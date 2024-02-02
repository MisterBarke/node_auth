//onst express = require('express');
const nodemailer = require('nodemailer');
const emailValidator = require('deep-email-validator')
//const path = require('path')
//const app = express();
//const PORT = 3000;




/* app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
}) */



module.exports.send_email = (async (req, res) => {
    try {
      const url = `https://api.hunter.io/v2/email-verifier?email=${req.body.to}&api_key=342841a0eb75aab0d74a901c8d60d9156d466ffa`;

      const response = await fetch(url);
            const data = await response.json();
            console.log(data.data.status);
          if (data.data.status === 'invalid') {
            res.status(500).json({ message: 'Enter a valid email' });
          }else{
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'bachirmahbarke@gmail.com', // replace with your email
                pass: 'vpim rmeg ijtd okkd' // replace with your email password or an app-specific password
              }
            });
        
            
            // Email content
            const mailOptions = {
              from: 'your-email@gmail.com', // sender address
              to: req.body.to, // list of receivers
              subject: req.body.subject, // Subject line
              text: req.body.message // plain text body
            };
        
            // Send email
            await transporter.sendMail(mailOptions);
        
            res.status(200).json({ message: 'Email sent successfully!' });
          }
      // Create a nodemailer transporter using your email service
     
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  });
 /* s */