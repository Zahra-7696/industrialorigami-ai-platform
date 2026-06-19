export const teamProfiles = [
  {
    id: "david",
    image: "/team/david-ewing.jpg",
    degree: "Master's in Data Science",
    email: "dew59@uclive.ac.nz",
    linkedin: "https://www.linkedin.com/in/david-ewing-nz/",
  },
  {
    id: "zahra",
    image: "/team/zahra-torabi.jpg",
    degree: "PhD in Computer Science (Artificial Intelligence)",
    email: "z.torabi.university@gmail.com",
    linkedin: "https://www.linkedin.com/in/zahra-s-torabi-6a3b90a1/",
  },
  {
    id: "lilian",
    image: "/team/lilian.jpg",
    degree: "Master of Data Science",
    email: "lillian00lee@gmail.com",
    linkedin: " https://www.linkedin.com/in/lillian-lee-data-analyst",
  },
  {
    id: "gurwinder",
    image: "/team/gurwinder.jpg",
    degree: "Bachelor of Mechanical Engineering",
    email: "gurwindersunny@gmail.com",
    linkedin: "https://www.linkedin.com/in/gurwinder-soundh-405791175/",
  },
] as const;

export type TeamProfileId = (typeof teamProfiles)[number]["id"];
