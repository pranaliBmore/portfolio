import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { experience } from '@/data/portfolio';
import { Briefcase, ChevronDown, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,hsl(var(--primary)/0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wide text-sm uppercase">Career</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real-world experience that shaped my skills and perspective.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-500 ${
                  isExpanded
                    ? 'border-primary/50 bg-card/80'
                    : 'border-border/50 bg-card/30 hover:border-primary/30'
                }`}
              >
                {/* Header */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className="p-6 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Briefcase size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground/70">{exp.duration}</p>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-muted-foreground transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border/50"
                    >
                      <div className="p-6 space-y-6">
                        {/* Description */}
                        <p className="text-muted-foreground">{exp.description}</p>

                        {/* Highlights */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                          <div className="space-y-2">
                            {exp.highlights.map((highlight, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                                <span className="text-muted-foreground text-sm">{highlight}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Project Details */}
                        {exp.project && (
                          <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                            <h4 className="font-semibold text-foreground mb-4">
                              Project: {exp.project.name}
                            </h4>
                            
                            {/* Workflow Steps */}
                            <div className="space-y-3">
                              {exp.project.steps.map((step, i) => (
                                <motion.div
                                  key={step.title}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 + i * 0.1 }}
                                  className="flex gap-4"
                                >
                                  <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                                      {i + 1}
                                    </div>
                                    {i < exp.project.steps.length - 1 && (
                                      <div className="w-px h-full bg-border mt-2" />
                                    )}
                                  </div>
                                  <div className="pb-4">
                                    <h5 className="font-medium text-foreground">{step.title}</h5>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>

                            {/* Result */}
                            <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                              <p className="text-sm text-primary font-medium">
                                Result: {exp.project.results}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span key={tech} className="skill-badge">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
