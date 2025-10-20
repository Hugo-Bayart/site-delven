// api/contact.js
/* eslint-env node */
/* global process */
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { name, email, phone, message, company } = req.body || {};

    // Honeypot anti-spam
    if (company) return res.status(200).json({ ok: true });

    // Validations simples
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "missing_fields" });
    }
    if (String(message).length > 5000) {
      return res.status(413).json({ ok: false, error: "message_too_long" });
    }

    // Transport SMTP (Gmail App Password, Brevo, Mailersend, etc.)
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,              // ex: "smtp.gmail.com"
      port: parseInt(process.env.MAIL_PORT || "587", 10),
      secure: process.env.MAIL_SECURE === "true", // true si port 465
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    // Contenu de l’email
    const info = await transporter.sendMail({
      from: `"Delven Site" <${process.env.MAIL_FROM || process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || "contact@delven.fr",
      replyTo: email,
      subject: `Nouveau message site — ${name}`,
      text:
        `Nom: ${name}\n` +
        `Email: ${email}\n` +
        `Téléphone: ${phone || "—"}\n\n` +
        `${message}`
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error("contact error:", err);
    return res.status(500).json({ ok: false, error: "server_error" });
  }
}
