import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Target, Rocket, Heart } from 'lucide-react';

const storyBlocks = [
  {
    icon: Lightbulb,
    title: "The Spark",
    content: "My journey began with curiosity — exploring how technology could solve real-world problems. From writing my first line of code to building complete applications, I've been driven by the excitement of creation.",
  },
  {
    icon: Target,
    title: "The Focus",
    content: "I specialize in bridging the gap between data and decisions. Through machine learning and intelligent systems, I transform raw information into actionable insights that make a difference.",
  },
  {
    icon: Rocket,
    title: "The Mission",
    content: "Whether it's developing Android apps, crafting web experiences, or training ML models — I approach every project with the same goal: building solutions that are elegant, efficient, and impactful.",
  },
  {
    icon: Heart,
    title: "The Passion",
    content: "I believe in continuous learning and staying at the forefront of emerging technologies. AI, cloud computing, and intelligent automation are not just trends — they're the future I'm preparing for.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wide text-sm uppercase">My Story</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            More Than Just <span className="text-gradient">Code</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A problem solver at heart, turning complex challenges into elegant solutions.
          </p>
        </motion.div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {storyBlocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <block.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {block.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {block.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-12 mt-16 pt-16 border-t border-border/30"
        >
          {[
            { value: "2+", label: "Years Learning" },
            { value: "5+", label: "Projects Built" },
            { value: "6", label: "Tech Stacks" },
            { value: "∞", label: "Curiosity" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
