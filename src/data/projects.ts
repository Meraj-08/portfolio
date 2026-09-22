import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'krishi-seva',
    title: "Krishi Seva — Smart Inventory System",
    description: "Real-time agricultural inventory system that uses computer vision to automatically track stock.",
    longDescription: "Developed a real-time inventory management system that uses computer vision (OpenCV) to automatically track agricultural products as they move in and out of storage.\n\nBuilt a responsive React dashboard for live visualization of stock levels and trends.\n\nIntegrated the Twilio API to send SMS alerts the moment stock falls below user-defined thresholds, so nothing runs out unnoticed.",
    githubLink: "https://github.com/Krishi-Seva",
    tags: [
      "React",
      "IoT",
      "OpenCV",
      "Computer Vision",
      "Twilio API",
      "Python",
    ],
  },
  {
    id: 'event-management-platform',
    title: "Event Management Platform",
    description: "Full-stack MERN platform that ran a 24-hour hackathon for 2000+ participants end to end.",
    longDescription: "Built a full-stack MERN platform to manage a 24-hour hackathon with 2000+ participants, 100+ submissions, and 30+ organizers — centralizing participant onboarding, project submissions, judging, and event operations in one place.\n\nStreamlined every event phase, from onboarding and project submissions to automated certificate distribution, reducing manual effort by 80%.",
    githubLink: "https://github.com/Hackaholic",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN",
    ],
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
