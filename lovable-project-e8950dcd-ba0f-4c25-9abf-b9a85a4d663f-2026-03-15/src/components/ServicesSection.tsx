import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Индивидуальная консультация",
    format: "Онлайн",
    duration: "60 минут",
    desc: null,
  },
  {
    title: "Консультация для пары",
    format: "Онлайн",
    duration: "90 минут",
    desc: null,
  },
  {
    title: "Долгосрочная терапия",
    format: null,
    duration: null,
    desc: "Регулярная работа для глубоких изменений.",
  },
  {
    title: "Пакеты консультаций",
    format: null,
    duration: null,
    desc: "Подходят для системной работы.",
  },
];

const ServicesSection = () => {
  const scrollTo = () => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <AnimatedSection className="section-padding" id="services">
      <div className="container-narrow">
        <p className="label-caps mb-4">Услуги</p>
        <h2 className="text-3xl md:text-5xl font-medium mb-16">Форматы работы</h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-xl font-medium mb-4">{s.title}</h3>
                {s.format && (
                  <div className="space-y-1 mb-4">
                    <p className="text-sm text-muted-foreground">Формат: {s.format}</p>
                    <p className="text-sm text-muted-foreground">Длительность: {s.duration}</p>
                  </div>
                )}
                {s.desc && <p className="text-sm text-muted-foreground mb-6">{s.desc}</p>}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollTo}
                className="w-full bg-primary text-primary-foreground text-sm py-3 rounded-xl mt-4"
              >
                Записаться
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
