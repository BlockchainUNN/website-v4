import * as Yup from "yup";

// Event Registration Validation Schema
export const eventRegistrationSchema = Yup.object({
  // Step 1 - Email
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  // Step 2 - Details
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters")
    .required("First name is required"),

  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters")
    .required("Last name is required"),

  phoneNumber: Yup.string()
    .matches(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number")
    .required("Phone number is required"),

  whatsappNumber: Yup.string()
    .matches(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid WhatsApp number")
    .required("WhatsApp number is required"),

  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Please select a valid gender")
    .required("Gender is required"),

  isStudent: Yup.string()
    .oneOf(["yes", "no"], "Please select if you are a student")
    .required("This field is required"),

  level: Yup.string().when("isStudent", {
    is: "yes",
    then: (schema) => schema.required("Academic level is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  department: Yup.string().when("isStudent", {
    is: "yes",
    then: (schema) => schema.required("Department is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  techCareer: Yup.string()
    .oneOf(
      [
        "programming",
        "designing",
        "product-management",
        "community-management",
        "copywriting",
        "marketing",
        "others",
      ],
      "Please select a valid tech career"
    )
    .required("Tech career interest is required"),

  experienceLevel: Yup.string()
    .oneOf(
      ["0-2years", "3-5years", "5-7years", "7+years"],
      "Please select your experience level"
    )
    .required("Experience level is required"),

  attendingFrom: Yup.string()
    .oneOf(
      ["unec", "unn", "others"],
      "Please select where you're attending from"
    )
    .required("Attending location is required"),

  willParticipateInHackathon: Yup.string()
    .oneOf(
      ["yes-definitely", "no-wont-be-able", "probably-not-sure"],
      "Please select your hackathon participation preference"
    )
    .required("Hackathon participation preference is required"),

  telegramUsername: Yup.string()
    .matches(/^@?[a-zA-Z0-9_]{5,32}$/, "Please enter a valid Telegram username")
    .nullable(),

  portfolio: Yup.string().url("Please enter a valid URL").nullable(),

  reasons: Yup.string()
    .min(10, "Please provide at least 10 characters")
    .max(500, "Reasons must not exceed 500 characters")
    .required("Please tell us why you want to attend"),
});

// Hackathon Registration Validation Schema
export const hackathonRegistrationSchema = Yup.object({
  // Step 1 - Email check
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  // Step 2 - Registration details
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters")
    .required("First name is required"),

  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters")
    .required("Last name is required"),

  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Please select a valid gender")
    .required("Gender is required"),

  phoneNumber: Yup.string()
    .matches(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number")
    .required("Phone number is required"),

  role: Yup.string()
    .oneOf(
      [
        "frontend-developer",
        "backend-developer",
        "smart-contract-developer",
        "designer",
        "product-manager",
        "others",
      ],
      "Please select a valid role"
    )
    .required("Role is required"),

  telegramUsername: Yup.string()
    .matches(/^@?[a-zA-Z0-9_]{5,32}$/, "Please enter a valid Telegram username")
    .nullable(),
});

// Hacker Login Validation Schema
export const hackerLoginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

// Team Creation/Join Validation Schema
export const teamActionSchema = Yup.object({
  teamName: Yup.string().when("action", {
    is: "create",
    then: (schema) =>
      schema
        .min(3, "Team name must be at least 3 characters")
        .max(50, "Team name must not exceed 50 characters")
        .required("Team name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  inviteCode: Yup.string().when("action", {
    is: "join",
    then: (schema) =>
      schema
        .min(6, "Invite code must be at least 6 characters")
        .required("Invite code is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  action: Yup.string()
    .oneOf(["create", "join"], "Invalid action")
    .required("Action is required"),
});

// Project Submission Validation Schema
export const projectSubmissionSchema = Yup.object({
  projectName: Yup.string()
    .min(3, "Project name must be at least 3 characters")
    .max(100, "Project name must not exceed 100 characters")
    .required("Project name is required"),

  description: Yup.string()
    .min(50, "Description must be at least 50 characters")
    .max(1000, "Description must not exceed 1000 characters")
    .required("Project description is required"),

  category: Yup.string()
    .oneOf(
      [
        "financial-inclusion",
        "open-governance",
        "identity-verification",
        "entertainment-media",
        "digital-collectibles",
        "real-world-assets",
        "open-idea",
      ],
      "Please select a valid category"
    )
    .required("Project category is required"),

  githubRepo: Yup.string()
    .url("Please enter a valid GitHub repository URL")
    .matches(/github\.com/, "Must be a GitHub repository URL")
    .required("GitHub repository is required"),

  liveDemo: Yup.string().url("Please enter a valid demo URL").nullable(),

  videoDemo: Yup.string().url("Please enter a valid video URL").nullable(),

  technologies: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one technology")
    .required("Technologies used are required"),

  teamContribution: Yup.string()
    .min(20, "Please provide at least 20 characters")
    .max(500, "Team contribution must not exceed 500 characters")
    .required("Team contribution description is required"),
});
