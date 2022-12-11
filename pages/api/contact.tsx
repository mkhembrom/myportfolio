import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"

export default function (req: NextApiRequest, res: NextApiResponse) {

    const {name, email, message} = req.body.data;

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
      html: `<div>${message}</div><p>Sent from:
      ${email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200).json({ success: true })
  }