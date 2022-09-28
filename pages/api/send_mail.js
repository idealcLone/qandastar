import nodemailer from "nodemailer";
import axios from "axios";

export default async function sendMail(req, res) {
  const { form, token } = req.body;

  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=6LeqWDoiAAAAAFMwo_LYAJDpKLv_I5sTLsQzzW7e&response=${token}`
  );

  if (response.status === 200) {
    const { fullName, phoneNumber, email, region, message } = form;
    const transporter = await nodemailer.createTransport({
      name: "smtp.mail.ru",
      host: "smtp.mail.ru",
      port: 465,
      auth: {
        user: "testov.bi@mail.ru",
        pass: "C9DRnYMmpRYjekaU8tvE",
      },
    });

    const info = await transporter.sendMail({
      from: "testov.bi@mail.ru", // sender address
      to: "eldarmusagali@gmail.com", // list of receivers
      subject: "Qandastar", // Subject line
      html: `<div>Тегі, Аты, Жөні: ${fullName}</div>
					 <div>Почта жәшігі: ${phoneNumber}</div>
					 <div>Ұялы ақпарат номері: ${email}</div>
					 <div>Мемлекет, қала: ${region}</div>
					 <div>Хабарлама: ${message}</div>`, // html body
    });

    res.status(200).json("ok");
  } else {
    res.status(401).json("captcha failed");
  }
}
