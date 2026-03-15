import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const CtaSection = () => {
  const scrollTo = () => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });

  return (
    <AnimatedSection className="section-padding bg-secondary/50" id="cta">
      <div className="container-narrow text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium mb-6">
          Готовы обсудить ваш запрос?
        </h2>
        <p className="text-muted-foreground mb-10">
          Опишите ситуацию — я предложу формат работы.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollTo}
          className="bg-primary text-primary-foreground px-10 py-4 rounded-xl text-sm font-medium"
        >
          Записаться на консультацию
        </motion.button>
      </div>
    </AnimatedSection>
  );
};

export default CtaSection;
