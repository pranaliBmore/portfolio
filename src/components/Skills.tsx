import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { ChevronRight } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--secondary)/0.05),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wide text-sm uppercase">Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Click to explore each category and discover my technical proficiencies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === index;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCategory(isActive ? null : index)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isActive
                    ? 'border-primary/50 bg-card/80'
                    : 'border-border/50 bg-card/30 hover:border-primary/30 hover:bg-card/50'
                }`}
              >
                {/* Header */}
                <div className="p-6 flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl transition-colors duration-300 ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : category.color === 'primary'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-secondary/10 text-secondary'
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {category.category}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.items.length} skills
                    </p>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`text-muted-foreground transition-transform duration-300 ${
                      isActive ? 'rotate-90' : ''
                    }`}
                  />
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border/50"
                    >
                      <div className="p-6 space-y-4">
                        {category.items.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: skillIndex * 0.1 }}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-foreground">{skill.name}</span>
                              <span className="text-sm text-primary">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                              />
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              {skill.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Preview Skills (when collapsed) */}
                {!isActive && (
                  <div className="px-6 pb-6">
                    <div className="flex flex-wrap gap-2">
                      {category.items.slice(0, 3).map((skill) => (
                        <span key={skill.name} className="skill-badge text-xs">
                          {skill.name}
                        </span>
                      ))}
                      {category.items.length > 3 && (
                        <span className="skill-badge text-xs">
                          +{category.items.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
