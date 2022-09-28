import nodemailer from 'nodemailer';

export default async function sendMail(req, res) {
	const { fullName, phoneNumber, email, region, message } = req.body;
	const transporter = await nodemailer.createTransport({
		name: 'smtp.mail.ru',
		host: 'smtp.mail.ru',
		port: 465,
		auth: {
			user: 'testov.bi@mail.ru',
			pass: 'C9DRnYMmpRYjekaU8tvE'
		}
	});

	const info = await transporter.sendMail({
		from: 'testov.bi@mail.ru', // sender address
		to: "eldarmusagali@gmail.com", // list of receivers
		subject: "Qandastar", // Subject line
		html: `<div>Тегі, Аты, Жөні: ${fullName}</div>
					 <div>Почта жәшігі: ${phoneNumber}</div>
					 <div>Ұялы ақпарат номері: ${email}</div>
					 <div>Мемлекет, қала: ${region}</div>
					 <div>Хабарлама: ${message}</div>`, // html body
	});

	res.status(200).json('ok');
}