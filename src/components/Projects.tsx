import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { Brain, Globe, ExternalLink, Github, X, Lightbulb, CheckCircle2, AlertCircle } from 'lucide-react';

const categoryIcons = {
  "Machine Learning": Brain,
  "Web Application": Globe,
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,hsl(var(--secondary)/0.05),transparent_50%)]" />

        <div className="container mx-auto px-6 relative z-10" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-wide text-sm uppercase">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real projects demonstrating my skills in ML, web development, and problem-solving.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => {
              const Icon = categoryIcons[project.category as keyof typeof categoryIcons] || Globe;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:bg-card/50 transition-all duration-500"
                >
                  {/* Thumbnail */}
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 rounded-2xl bg-background/20 backdrop-blur-sm"
                      >
                        <Icon size={48} className="text-primary" />
                      </motion.div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border p-6 flex items-start justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground mt-3">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Problem */}
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <AlertCircle size={18} className="text-destructive" />
                    Problem Statement
                  </h4>
                  <p className="text-muted-foreground">{selectedProject.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <Lightbulb size={18} className="text-primary" />
                    Solution Approach
                  </h4>
                  <p className="text-muted-foreground">{selectedProject.solution}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <CheckCircle2 size={18} className="text-green-500" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Learnings */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                    <h5 className="font-semibold text-foreground mb-3">Challenges Faced</h5>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-secondary">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                    <h5 className="font-semibold text-foreground mb-3">Key Learnings</h5>
                    <ul className="space-y-2">
                      {selectedProject.learnings.map((learning, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 text-foreground font-medium transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 transition-all"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
