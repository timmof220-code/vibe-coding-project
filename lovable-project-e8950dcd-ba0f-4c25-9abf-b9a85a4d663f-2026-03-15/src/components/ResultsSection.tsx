import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const results = [
  "снижение тревоги",
  "больше ясности",
  "рост самооценки",
  "контакт с чувствами",
  "новые реакции на сложные ситуации",
  "улучшение отношений",
  "внутренняя устойчивость",
];

const ResultsSection = () => (
  <AnimatedSection className="section-padding bg-secondary/50">
    <div className="container-narrow">
      <p className="label-caps mb-4">Результаты</p>
      <h2 className="text-3xl md:text-5xl font-medium mb-12">Что получают мои клиенты</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {results.map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="card-premium p-6 text-center"
          >
            <span className="text-sm font-medium">{r}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ResultsSection;
