import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '@/data/portfolio';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wide text-sm uppercase">Academic</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A consistent academic journey building the foundation for technical excellence.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/30 hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full border-4 border-background bg-primary hidden md:block" />

                <div className="ml-0 md:ml-20 p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-500 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {edu.status === "Pursuing" ? (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/30">
                          {edu.status}
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {edu.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      {edu.duration}
                    </span>
                    {edu.grade && (
                      <span className="flex items-center gap-1 text-primary font-semibold">
                        <Award size={14} />
                        {edu.grade}
                      </span>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
