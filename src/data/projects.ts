import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'naano',
    title: "Naano — B2B LinkedIn Creator Marketplace",
    description: "A pixel-faithful rebuild of the Naano marketing site into a clean, modern Next.js + TypeScript codebase.",
    longDescription: "A from-scratch rebuild of naano.com — a B2B LinkedIn creator marketplace — into a clean, modern Next.js + TypeScript codebase.\n\nRecreated the full landing experience: hero, feature sections, and the companies / creators / agencies flows, with a fully responsive layout built on Tailwind CSS and shadcn/ui components.\n\nWired up Supabase auth with Google OAuth scaffolding for the sign-in flows, and deployed the result on Vercel.",
    image: "/assets/projects/naano.png",
    liveLink: "https://naano-rebuild-one.vercel.app",
    githubLink: "https://github.com/Meraj-08/naano-rebuild",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
    ],
  },
  {
    id: 'event-management-platform',
    title: "Event Management Platform",
    description: "Official hackathon website built with the MERN stack — scaled to 2000+ participants and 100+ verified certificates.",
    longDescription: "Official hackathon website built with the MERN stack to manage everything from participant onboarding to final awards. Scaled to 2000+ participants and issued 100+ verified team certificates, featuring a live-updating timeline and smooth organizer–participant coordination.\n\nReact frontend with a fully responsive layout, background video loop, Framer Motion animations, and scroll-triggered effects (React Router, Styled Components, React Intersection Observer).\n\nMulti-step registration with client-side validation plus core pages: Home, About, Schedule, Register, and Contact.\n\nEmailJS-powered contact form and a certificate-ready system; live, animated event timeline and multi-phase schedule.",
    image: "/assets/projects/hackaholic.png",
    githubLink: "https://github.com/Meraj-08/Hackaholic_website",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "MERN",
    ],
  },
  {
    id: 'krishi-seva',
    title: "Krishi Seva: Smart Inventory System",
    description: "An AI-powered inventory system that uses computer vision to track agricultural stock and send SMS alerts.",
    longDescription: "An AI-powered inventory management system that uses computer vision to automatically track agricultural stock and send SMS alerts.\n\nBuilt a real-time object detection pipeline with YOLOv11 and OpenCV for automated item counting.\n\nDeveloped a responsive React dashboard for inventory visualization and management.\n\nIntegrated the Twilio API for instant SMS notifications when stock falls below user-defined thresholds.\n\nDesigned a Flask backend with SQLite for efficient data handling and API operations.",
    image: "/assets/projects/krishi.jpeg",
    githubLink: "https://github.com/Meraj-08/Krishi_Seva-Smart-Inventory-System",
    tags: [
      "Python",
      "OpenCV",
      "YOLOv11",
      "React",
      "Flask",
    ],
  },
  {
    id: 'imdb-sentiment-analysis',
    title: "IMDB-Movie Sentiment Analysis",
    description: "An LSTM model trained on IMDB reviews that classifies text as Positive or Negative, served with a Streamlit UI.",
    longDescription: "A deep learning project that uses an LSTM model trained on IMDB movie reviews to classify user-submitted text as Positive or Negative.\n\nBuilt with PyTorch and deployed using Streamlit, featuring a modern UI with a custom background, styled components, and star-based confidence visualization.",
    image: "/assets/projects/IMDB.jpeg",
    githubLink: "https://github.com/Meraj-08/IMDB-Movie-Sentiment-Analysis",
    tags: [
      "Python",
      "PyTorch",
      "Streamlit",
    ],
  },
  {
    id: 'mini-c-compiler',
    title: "Mini C Compiler",
    description: "An educational compiler with a C++ backend and Python Tkinter GUI, demonstrating lexing, parsing, and intermediate code generation.",
    longDescription: "An educational compiler project built with C++ (backend logic) and Python Tkinter (GUI). Supports custom uppercase syntax (IF, ELSE, PRINT) and demonstrates key compiler phases like lexical analysis, parsing, and intermediate code generation.\n\nDesigned a Python Tkinter-based GUI editor with real-time feedback, line numbers, and an output console.\n\nImplemented compiler logic in C++ with support for arithmetic expressions and control structures.\n\nIntegrated lexer and parser using Flex/Bison or custom parsing for lexical & syntax analysis.\n\nEnabled execution of `.mini` files with subprocess integration, generating cross-platform executables (.exe/.out).",
    image: "/assets/projects/compiler.png",
    githubLink: "https://github.com/Meraj-08/compiler_project",
    tags: [
      "C++",
      "Python",
    ],
  },
  {
    id: 'volume-brightness-controller',
    title: "Volume Brightness Controller",
    description: "A Python hand-gesture system that controls system volume and screen brightness in real time via webcam.",
    longDescription: "A Python-based hand gesture recognition system that uses a webcam to control system volume and screen brightness in real time. Built with OpenCV, MediaPipe, pycaw, and screen_brightness_control.\n\nControlled brightness using the left hand (thumb–index finger distance) and volume using the right hand.\n\nImplemented real-time webcam tracking with visual feedback using OpenCV.\n\nIntegrated MediaPipe Hand Landmarks for accurate gesture recognition.",
    image: "/assets/projects/VBC.jpeg",
    githubLink: "https://github.com/Meraj-08/Volume-Brightness-Control",
    tags: [
      "Python",
      "OpenCV",
      "MediaPipe",
    ],
  },
  {
    id: 'virtual-memory-manager',
    title: "Virtual Memory Manager",
    description: "An interactive platform that visualizes page-replacement algorithms through simulations, comparisons, and quizzes.",
    longDescription: "An interactive educational platform that visualizes memory management algorithms through simulations, comparisons, and quizzes. Built with Next.js, React, and Tailwind CSS, it helps students understand virtual memory concepts with real-time experimentation.\n\nDeveloped interactive simulations for page replacement algorithms: FIFO, LRU, Optimal, and Clock, with side-by-side performance comparison metrics.\n\nAdded educational resources and interactive quizzes, plus customizable parameters like frame count, reference string, and simulation speed.\n\nBuilt real-time visualizations with animated memory state transitions and optional TLB simulation.\n\nDeployed on Vercel with a responsive, mobile-friendly UI using Next.js, Tailwind CSS, and Recharts.",
    image: "/assets/projects/VMM.jpeg",
    githubLink: "https://github.com/Meraj-08/Virtual-Memory-Sim",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
