import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  "Вы оставляете заявку",
  "Я уточняю ваш запрос",
  "Мы выбираем формат",
  "Работаем в вашем темпе",
  "Появляются устойчивые изменения",
];

const ProcessSection = () => (
  <AnimatedSection className="section-padding bg-secondary/50">
    <div className="container-narrow">
      <p className="label-caps mb-4">Процесс</p>
      <h2 className="text-3xl md:text-5xl font-medium mb-16">Как проходит работа</h2>

      <div className="max-w-2xl space-y-0">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-6 py-6 border-b border-foreground/5 last:border-0"
          >
            <span className="font-display text-2xl text-primary/60 font-medium tabular-nums w-8 shrink-0">
              {i + 1}
            </span>
            <p className="text-foreground">{step}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ProcessSection;
