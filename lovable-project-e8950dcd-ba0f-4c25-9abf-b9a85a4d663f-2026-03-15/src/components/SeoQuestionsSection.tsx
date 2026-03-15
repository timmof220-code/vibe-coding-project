import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const questions = [
  "Почему у меня ничего не получается, хотя я стараюсь?",
  "Как перестать накручивать себя?",
  "Почему я постоянно тревожусь?",
  "Мне ничего не хочется и нет сил — что со мной?",
  "Как справиться с выгоранием?",
  "Как повысить самооценку?",
  "Как научиться говорить «нет»?",
  "Почему я застрял(а) в плохих отношениях?",
  "Как пережить расставание?",
  "Почему пропало сексуальное желание?",
  "Как вернуть близость в паре?",
  "Почему я часто злюсь и раздражаюсь?",
  "Как найти мотивацию?",
  "Как перестать зависеть от чужого мнения?",
];

const SeoQuestionsSection = () => (
  <AnimatedSection className="section-padding bg-secondary/50">
    <div className="container-narrow">
      <p className="label-caps mb-4">Частые запросы</p>
      <h2 className="text-3xl md:text-5xl font-medium mb-16">
        Знакомые вопросы?
      </h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-4">
        {questions.map((q, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="font-display italic text-lg md:text-xl text-foreground/80 hover:text-primary transition-colors cursor-default break-inside-avoid pb-2"
          >
            {q}
          </motion.p>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default SeoQuestionsSection;
