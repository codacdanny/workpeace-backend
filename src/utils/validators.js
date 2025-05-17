import { body } from "express-validator";

export const instructorFormValidation = [
  body("firstName").trim().notEmpty().withMessage("First name is required"),
  body("lastName").trim().notEmpty().withMessage("Last name is required"),
  body("workEmail").isEmail().withMessage("Valid work email is required"),
  body("mobileNumber").notEmpty().withMessage("Mobile number is required"),
  body("courseExpertise")
    .notEmpty()
    .withMessage("Course expertise is required"),
  body("occupation").notEmpty().withMessage("Occupation is required"),
  body("reason").notEmpty().withMessage("Reason to join is required"),
];

export const contactFormValidation = [
  body("fullName").trim().notEmpty().withMessage("Full name is required"),
  body("emailAddress").isEmail().withMessage("Valid email address is required"),
  body("mobileNumber").notEmpty().withMessage("Mobile number is required"),
  body("message").notEmpty().withMessage("Message is required"),
];

export const hiringFormValidation = [
  body("firstName").trim().notEmpty().withMessage("First name is required"),
  body("lastName").trim().notEmpty().withMessage("Last name is required"),
  body("workEmail").isEmail().withMessage("Valid work email is required"),
  body("mobileNumber").notEmpty().withMessage("Mobile number is required"),
];
