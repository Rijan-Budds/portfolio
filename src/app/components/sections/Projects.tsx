"use client";

import React, { useState, useEffect } from "react";
import { projects as projectData } from "../../data/projects";
import Image from "next/image";
import { Project } from "../../data/types";

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setProjects(projectData);
    }, 1000);
  }, []);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-4">
        <span className="flex-1 h-px bg-gray-400"></span>
        Some of my latest works
        <span className="flex-1 h-px bg-gray-400"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
