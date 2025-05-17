import { body } from "express-validator";

export const instructorFormValidation = [
  body("firstname", "First name is required").trim().notEmpty(),
  body("lastname", "Last name is required").trim().notEmpty(),
  body("email", "Valid work email is required").isEmail(),
  body("mobile", "Mobile number is required").notEmpty(),
  body("course", "Course expertise is required").notEmpty(),
  body("occupation", "Occupation is required").notEmpty(),
  body("reasonToJoinUs", "Reason to join is required").notEmpty(),
];

export const contactFormValidation = [
  body("fullname", "Full name is required").trim().notEmpty(),
  body("email", "Valid email address is required").isEmail(),
  body("mobile", "Mobile number is required").trim().notEmpty(),
  body("message", "Message is required").trim().notEmpty(),
];

export const hiringFormValidation = [
  body("firstname", "First name is required").trim().notEmpty(),
  body("lastname", "Last name is required").trim().notEmpty(),
  body("email", "Valid work email is required").isEmail(),
  body("mobile", "Mobile number is required").notEmpty(),
];
