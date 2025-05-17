import express from "express";
import {
  handleInstructorForm,
  handleContactForm,
  handleHiringForm,
} from "../controllers/formControllers.js";
import {
  instructorFormValidation,
  contactFormValidation,
  hiringFormValidation,
} from "../utils/validators.js";

const router = express.Router();

// Instructor application route
router.post("/instructor", instructorFormValidation, handleInstructorForm);

// Contact form route
router.post("/contact", contactFormValidation, handleContactForm);

// Hiring consultation route
router.post("/hiring", hiringFormValidation, handleHiringForm);

export default router;
