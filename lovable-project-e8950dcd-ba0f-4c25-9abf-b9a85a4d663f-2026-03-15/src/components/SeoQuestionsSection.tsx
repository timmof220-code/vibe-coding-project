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

// Maps SEO questions to specific FAQ item IDs in FaqSection
const seoToFaq: Record<string, string> = {
  "Почему я постоянно тревожусь?": "faq-anxiety",
  "Как справиться с выгоранием?": "faq-burnout",
  "Почему я часто злюсь и раздражаюсь?": "faq-anger",
  "Мне ничего не хочется и нет сил — что со мной?": "faq-need-help",
  "Почему у меня ничего не получается, хотя я стараюсь?": "faq-serious-problem",
  "Как перестать накручивать себя?": "faq-anxiety",
  "Как повысить самооценку?": "faq-serious-problem",
  "Как найти мотивацию?": "faq-burnout",
  "Как перестать зависеть от чужого мнения?": "faq-need-help",
};

const handleQuestionClick = (question: string) => {
  const faqId = seoToFaq[question];
  const faqEl = document.getElementById("faq");
  if (faqEl) {
    faqEl.scrollIntoView({ behavior: "smooth" });
    if (faqId) {
      setTimeout(() => {
        window.location.hash = faqId;
      }, 400);
    }
  }
};

const SeoQuestionsSection = () => (
  <AnimatedSection className="section-padding bg-secondary/50">
    <div className="container-narrow">
      <p className="label-caps mb-4">Частые запросы</p>
      <h2 className="text-3xl md:text-5xl font-medium mb-16">
        Знакомые вопросы?
      </h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-4">
        {questions.map((q, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            onClick={() => handleQuestionClick(q)}
            className="block w-full text-left font-display italic text-lg md:text-xl text-foreground/80 hover:text-primary transition-all cursor-pointer break-inside-avoid pb-2 group"
          >
            <span className="inline-flex items-baseline gap-1">
              {q}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary text-base not-italic ml-1">
                →
              </span>
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default SeoQuestionsSection;
