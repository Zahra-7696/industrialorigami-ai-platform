export const teamProfiles = [
  {
    id: "david",
    image: "/team/david-ewing.jpg",
    degree: "Master's in Data Science",
    email: "david.ewing@industrialorigami.ai",
    linkedin: "https://www.linkedin.com/in/david-ewing-nz/",
  },
  {
    id: "zahra",
    image: "/team/zahra-torabi.jpg",
    degree: "PhD in Computer Science (Artificial Intelligence)",
    email: "zahra.torabi@industrialorigami.ai",
    linkedin: "https://www.linkedin.com/in/zahra-torabi-6a3b90a1/",
  },
  {
    id: "gurwinder",
    image: "/team/gurwinder.jpg",
    degree: "Bachelor of Mechanical Engineering",
    email: "gurwinder@industrialorigami.ai",
    linkedin: "https://www.linkedin.com/in/gurwinder-soundh-405791175/",
  },
] as const;

export type TeamProfileId = (typeof teamProfiles)[number]["id"];
