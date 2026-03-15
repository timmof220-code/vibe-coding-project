import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Можно ли отменить или перенести консультацию?",
    a: "Если вы предупреждаете за 24 часа — консультацию можно перенести или вернуть предоплату. Если отмена менее чем за 24 часа — предоплата не возвращается. Если вы не предупредили и не пришли — предоплата не возвращается.",
  },
  {
    q: "Сколько нужно встреч?",
    a: "Количество встреч индивидуально. В среднем около 10 консультаций требуется для значимых изменений. Иногда достаточно 1–2 встреч, иногда требуется более длительная работа. Оптимальная частота — 1 раз в 7–14 дней.",
  },
  {
    q: "Есть ли бесплатная консультация?",
    a: "Нет.",
  },
  {
    q: "Почему запись по предоплате?",
    a: "Предоплата фиксирует выбранное вами время.",
  },
];

const FaqSection = () => (
  <AnimatedSection className="section-padding" id="faq">
    <div className="container-narrow max-w-3xl">
      <p className="label-caps mb-4">Вопросы</p>
      <h2 className="text-3xl md:text-5xl font-medium mb-12">FAQ</h2>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-none card-premium px-6">
            <AccordionTrigger className="text-left font-display text-base font-medium hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </AnimatedSection>
);

export default FaqSection;
