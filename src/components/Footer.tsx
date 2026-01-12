import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            © {currentYear} {personalInfo.name}. Crafted with{' '}
            <Heart size={14} className="text-primary fill-primary" /> and code.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 text-sm text-muted-foreground"
          >
            <a href="#" className="hover:text-primary transition-colors">
              Back to Top
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
