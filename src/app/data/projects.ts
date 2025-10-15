  // {
  //   title: "project name",
  //   description: "Description for project 1",
  //   image: "/Untitled.png",
  //   tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
  //   link: "",
  //   github: ""
  // },


import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Ecommerce Website",
    description: "A full-stack e-commerce platform with real-time inventory and an immersive shopping experience.",
    image: "/ecommerce.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "Firebase", "Zustand"],
    link: "https://tech-store-seven-pied.vercel.app/",
    github: "https://github.com/Rijan-Budds/tech-hub"
  },
  {
    title: "Ecommerce Website",
    description: "Similar ecommerce website design. But with different database. This one uses MongoDB as database",
    image: "/mongo.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB atlas"],
    link: "https://tech-hub-sage.vercel.app/",
    github: "https://github.com/Rijan-Budds/ecommerce"
  },
  {
    title: "Grading Students System",
    description: "A system for automating the grading process of student assignments for University of Limerik.",
    image: "/elixir.png",
    tech: ["Elixir", "Phoenix Framework", "Ecto", "PostgreSQL", "Tailwind CSS"],
    link: "https://handin.org/users/log_in",
    github: "https://github.com/sushant12/handin"
  },
  {
    title: "Instagram Clone",
    description: "An instagram clone built with Elixir and Phoenix Framework, featuring real-time updates and a responsive design.",
    image: "/insta.png",
    tech: ["Elixir", "Phoenix Framework"],
    github: "https://github.com/Rijan-Budds/Insta"
  },
];
