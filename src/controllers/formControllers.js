import { validationResult } from "express-validator";
import { transporter } from "../utils/mailer.js";
import {
  instructorEmailTemplate,
  contactEmailTemplate,
  hiringEmailTemplate,
} from "../templates/emailTemplates.js";
import dotenv from "dotenv";

dotenv.config();
const handleValidationErrors = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  return null;
};

export const handleInstructorForm = async (req, res) => {
  const validationError = handleValidationErrors(req, res);
  if (validationError) return validationError;

  try {
    const mailOptions = {
      from: `"WorkPeace Forms" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: "New Instructor Application",
      html: instructorEmailTemplate(req.body),
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Application submitted successfully!" });
  } catch (err) {
    console.error("Mail error:", err);
    res
      .status(500)
      .json({ success: false, message: "Could not process application" });
  }
};

export const handleContactForm = async (req, res) => {
  const validationError = handleValidationErrors(req, res);
  if (validationError) return validationError;

  try {
    const mailOptions = {
      from: `"WorkPeace Forms" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: "New Contact Form Submission",
      html: contactEmailTemplate(req.body),
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Mail error:", err);
    res.status(500).json({ success: false, message: "Could not send message" });
  }
};

export const handleHiringForm = async (req, res) => {
  const validationError = handleValidationErrors(req, res);
  if (validationError) return validationError;

  try {
    const mailOptions = {
      from: `"WorkPeace Forms" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: "New Hiring Consultation Request",
      html: hiringEmailTemplate(req.body),
    };

    await transporter.sendMail(mailOptions);
    res.json({
      success: true,
      message: "Consultation request submitted successfully!",
    });
  } catch (err) {
    console.error("Mail error:", err);
    res
      .status(500)
      .json({ success: false, message: "Could not process request" });
  }
};
