"use client";

import React, { useState, useEffect } from "react";
import { projects as projectData } from "../../data/projects";
import Image from "next/image";
import { Project } from "../../data/types";

type ProjectsProps = {
  limit?: number;
};

function Projects({ limit }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setTimeout(() => {
      if (typeof limit === "number") {
        setProjects(projectData.slice(0, limit));
      } else {
        setProjects(projectData);
      }
    }, 1000);
  }, [limit]);

  return (
    <section className="py-16 px-4 projects-section">
      <h2 className="mb-12 text-center">
        <div className="flex items-center justify-center gap-6 mb-2">
          <span className="h-[1px] w-16 bg-accent opacity-50"></span>
          <span className="font-cinzel text-3xl font-bold text-accent">Latest Works</span>
          <span className="h-[1px] w-16 bg-accent opacity-50"></span>
        </div>
        <p className="text-muted font-playfair italic">Forged in code, tempered by design</p>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <article 
            key={index} 
            className="group relative overflow-hidden bg-card rounded-lg transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="aspect-[16/9] relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
            </div>
            
            {/* Title overlay - always visible */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="font-cinzel text-xl font-bold text-white mb-2">{project.title}</h3>
            </div>
            
            {/* Content overlay - shows on hover */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
              <div className="space-y-3">
                <h3 className="font-cinzel text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-200 text-sm line-clamp-3">{project.description}</p>
                {project.tech && (
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-accent/30 text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-4 items-center mt-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" 
                       className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/90 transition-colors">
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="text-white hover:text-accent transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
