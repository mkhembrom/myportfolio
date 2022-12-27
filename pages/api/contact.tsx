import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log("API WORk");

    const {name, email, message} = req.body;

    console.log(name);
    console.log(message);
    console.log(email);


    interface LooseObject {
      [key: string]: any
    }
    let errorData: LooseObject = {};

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'manjeshembrom@gmail.com',
        pass: 'naocaxjbfzuxqgio',
      },
      secure: true,
    });

    if(name == '' || email == '' || message == '' ) {
      errorData['csmerr'] = true
    }

    if(Object.keys(errorData).length > 0) {
      res.status(400).json({ success: false })

    }

    const mailData = {
      from: email,
      to: 'manjeshembrom@gmail.com',
      subject: `Message From ${name}`,
      text: message + " | Sent from: " + email,
      html: `<div>${message}</div><p>Sent from:${email}</p>`
    }


    transporter.sendMail(mailData, (err, info) => {

      if(err) {
        res.status(400).json({ success: false })
      } else {
        res.status(200).json({ success: true })
      }
     
    });
  }