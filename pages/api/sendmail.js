const nodemailer = require("nodemailer");

export default async function main(req, res) {
  const email = req.body.body;

  let transporter = nodemailer.createTransport({
    host: "mail.wrapjekeuken.nl",
    port: 465,
    secure: true,
    auth: {
      user: "info@wrapjekeuken.nl",
      pass: "Vreemdevogelbenjij125",
    },
  });

  let info = await transporter.sendMail({
    from: `Contact Form Wrapjekeuken.nl <info@wrapjekeuken.nl>`,
    to: "info@wrapjekeuken.nl",
    subject: `${email.onderwerp}`,
    text: `naam: ${email.voornaam} \n\nemail: ${email.email}\n\ntelefoon:  ${email.telefoon}: \n\nBericht:\n\n${email.bericht}`,
  });

  let klant = await transporter.sendMail({
    from: `Wrap je keuken <info@wrapjekeuken.nl>`,
    to: `${email.email}`,
    subject: `Bevestiging`,
    text: `Beste ${email.voornaam},\n\nHartelijk dank voor je aanvraag, wij hebben je aanvraag in goede orde ontvangen. Wrap je keuken heeft service en klantgerichtheid hoog in het vaandel staan. Daarom doen we ons uiterste best om je zo snel mogelijk te beantwoorden(binnen 48 uur). Mocht u ondertussen nog vragen hebben kan je ons altijd bereiken op: +31 (0)85 400 81 81.\n\nMet vriendelijke groet,\n\nTeam Wrap Je Keuken`,
  });

  console.log("Message sent: %s", klant.messageId);

  console.log("Message sent: %s", info.messageId);
  res.status(200).json({ message: "Sent" });
}
