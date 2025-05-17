import { body } from "express-validator";

export const instructorFormValidation = [
  body("firstname").trim().notEmpty().withMessage("First name is required"),
  body("lastname").trim().notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Valid work email is required"),
  body("mobile").notEmpty().withMessage("Mobile number is required"),
  body("course").notEmpty().withMessage("Course expertise is required"),
  body("occupation").notEmpty().withMessage("Occupation is required"),
  body("reasonToJoinUs").notEmpty().withMessage("Reason to join is required"),
];

export const contactFormValidation = [
  body("fullname").trim().notEmpty().withMessage("Full name is required"),
  body("email").isEmail().withMessage("Valid email address is required"),
  body("mobile").notEmpty().withMessage("Mobile number is required"),
  body("message").notEmpty().withMessage("Message is required"),
];

export const hiringFormValidation = [
  body("firstname").trim().notEmpty().withMessage("First name is required"),
  body("lastname").trim().notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Valid work email is required"),
  body("mobile").notEmpty().withMessage("Mobile number is required"),
];
