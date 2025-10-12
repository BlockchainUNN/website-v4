export const commonContent = {
  navigation: {
    logo: {
      light: "/images/logo/blockchainunn-green.png",
      dark: "/images/logo/blockchainunn-white.png",
      alt: "BlockchainUNN",
    },
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Community", href: "/community" },
      { label: "Team", href: "/about#team" },
      { label: "Events", href: "/event" },
    ],
  },

  footer: {
    description:
      "Leading blockchain community at the University of Nigeria, empowering students through education, innovation, and real-world applications.",
    quickLinks: [
      { label: "About Us", href: "/about" },
      { label: "Community", href: "/community" },
      { label: "Events", href: "/event" },
      { label: "Contact", href: "/contact" },
    ],
    socialLinks: [
      {
        platform: "Twitter",
        href: "https://twitter.com/blockchainunn",
        icon: "FaTwitter",
      },
      {
        platform: "Discord",
        href: "https://discord.gg/blockchainunn",
        icon: "FaDiscord",
      },
      {
        platform: "Telegram",
        href: "https://t.me/blockchainunn",
        icon: "FaTelegram",
      },
      {
        platform: "LinkedIn",
        href: "https://linkedin.com/company/blockchainunn",
        icon: "FaLinkedin",
      },
      {
        platform: "Instagram",
        href: "https://instagram.com/blockchainunn",
        icon: "FaInstagram",
      },
    ],
    copyright: `© ${new Date().getFullYear()} BlockchainUNN. All rights reserved.`,
  },

  forms: {
    validation: {
      email: "Please enter a valid email address",
      required: "This field is required",
      phone: "Please enter a valid phone number",
      minLength: "This field must be at least {min} characters",
      maxLength: "This field must not exceed {max} characters",
    },
    placeholders: {
      email: "Enter your email address",
      firstName: "First Name",
      lastName: "Last Name",
      phone: "Phone Number",
      whatsapp: "WhatsApp Number",
      telegram: "Telegram Username",
      portfolio: "Portfolio URL",
      password: "Password",
    },
  },

  buttons: {
    submit: "Submit",
    register: "Register Now",
    login: "Login",
    back: "Go Back",
    next: "Next",
    previous: "Previous",
    cancel: "Cancel",
    continue: "Continue",
    joinTeam: "Join Team",
    createTeam: "Create Team",
    leaveTeam: "Leave Team",
    exploreEvents: "Explore Events",
  },

  loading: {
    default: "Loading...",
    submitting: "Submitting...",
    processing: "Processing...",
    authenticating: "Authenticating...",
  },

  errors: {
    network: "Network error. Please check your connection.",
    server: "Server error. Please try again later.",
    auth: "Authentication failed. Please login again.",
    notFound: "The requested resource was not found.",
    validation: "Please check your input and try again.",
    generic: "Something went wrong. Please try again.",
  },

  success: {
    registration: "Registration successful!",
    login: "Login successful!",
    update: "Updated successfully!",
    submit: "Submitted successfully!",
  },
};
