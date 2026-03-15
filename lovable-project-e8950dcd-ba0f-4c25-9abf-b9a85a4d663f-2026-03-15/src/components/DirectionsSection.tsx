import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Brain, Heart, Users, Home, Flame, Briefcase, Monitor } from "lucide-react";

const directions = [
  {
    icon: Brain,
    title: "Психологическое консультирование",
    items: ["тревога и постоянное напряжение", "эмоциональное выгорание", "внутренние конфликты", "самокритика", "потеря уверенности", "сложность с принятием решений"],
  },
  {
    icon: Heart,
    title: "Рост самооценки",
    items: ["принятие себя", "снижение зависимости от чужого мнения", "развитие внутренней опоры", "уверенность в себе"],
  },
  {
    icon: Users,
    title: "Отношения и созависимость",
    items: ["повторяющиеся сценарии отношений", "страх одиночества", "сложности с границами", "эмоциональная зависимость"],
  },
  {
    icon: Home,
    title: "Родительские отношения",
    items: ["сложные отношения с родителями", "чувство вины и долга", "влияние детских сценариев", "трудности сепарации"],
  },
  {
    icon: Flame,
    title: "Сексуальность",
    items: ["снижение сексуального желания", "аноргазмия", "сексуальные комплексы", "напряжение и стыд в теме секса", "восстановление контакта с телом"],
  },
  {
    icon: Briefcase,
    title: "Работа с парами",
    items: ["кризисы в отношениях", "конфликты", "эмоциональная дистанция", "восстановление близости"],
  },
  {
    icon: Monitor,
    title: "Клиенты интеллектуальных профессий",
    items: ["профессиональное выгорание", "перегрузка и стресс", "постоянный внутренний шум", "потеря мотивации", "сложность отключаться от работы"],
  },
];

const DirectionsSection = () => (
  <AnimatedSection className="section-padding" id="services-directions">
    <div className="container-narrow">
      <p className="label-caps mb-4">Направления</p>
      <h2 className="text-3xl md:text-5xl font-medium mb-16">Чем я могу быть полезна</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {directions.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
            className="card-premium p-8 group cursor-default"
          >
            <d.icon size={24} className="text-primary mb-5" strokeWidth={1.5} />
            <h3 className="font-display text-lg font-medium mb-4">{d.title}</h3>
            <ul className="space-y-1.5">
              {d.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default DirectionsSection;
