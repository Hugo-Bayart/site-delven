// api/audit.js
/* eslint-env node */
/* global process */
const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const {
      nom,
      email,
      telephone,
      entreprise,
      secteur,
      salaries,
      quizOutils,
      quizAutomatisation,
      quizProcess,
      quizSuiviDonnees,
      quizTempsRepetitif,
      quizAisanceDigitale,
      probleme,
      budget
    } = req.body || {};

    // Validations simples
    if (!nom || !email || !entreprise || !probleme) {
      return res.status(400).json({ ok: false, error: "missing_fields" });
    }
    if (String(probleme).length > 5000) {
      return res.status(413).json({ ok: false, error: "message_too_long" });
    }

    // Transport SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || "587", 10),
      secure: process.env.MAIL_SECURE === "true",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    // Email au client : confirmation
    await transporter.sendMail({
      from: `"Delven Audit" <${process.env.MAIL_FROM || process.env.MAIL_USER}>`,
      to: email,
      subject: "Demande d'audit logiciel reçue",
      text:
        `Bonjour ${nom},\n\n` +
        `Merci pour votre demande d'audit.\n` +
        `Nous avons bien reçu votre dossier et nous vous recontacterons sous 24h ouvrées pour planifier une première séance.\n\n` +
        `Cordialement,\n` +
        `L'équipe Delven`
    });

    // Email interne : notification
    const info = await transporter.sendMail({
      from: `"Delven Audit" <${process.env.MAIL_FROM || process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || "contact@delven.fr",
      replyTo: email,
      subject: `Nouvelle demande d'audit — ${nom} (${entreprise})`,
      text:
        `Nom: ${nom}\n` +
        `Email: ${email}\n` +
        `Téléphone: ${telephone || "—"}\n` +
        `Entreprise: ${entreprise}\n` +
        `Secteur: ${secteur || "—"}\n` +
        `Salariés: ${salaries || "—"}\n` +
        `Outils numériques utilisés: ${quizOutils || "—"}\n` +
        `Priorité automatisation: ${quizAutomatisation || "—"}\n` +
        `Processus documentés: ${quizProcess || "—"}\n` +
        `Suivi des données: ${quizSuiviDonnees || "—"}\n` +
        `Temps tâches répétitives: ${quizTempsRepetitif || "—"}\n` +
        `Aisance digitale équipe: ${quizAisanceDigitale || "—"}\n` +
        `Budget: ${budget || "—"}\n\n` +
        `Problèmes:\n${probleme}`
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error("audit error:", err);
    return res.status(500).json({ ok: false, error: "server_error" });
  }
};
