import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type Category = "psychology" | "organization" | "prices" | "start";

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "psychology", label: "О психологии" },
  { key: "organization", label: "Организация" },
  { key: "prices", label: "Цены" },
  { key: "start", label: "Начало работы" },
];

const faqData: Record<Category, { id: string; q: string; a: string }[]> = {
  psychology: [
    {
      id: "faq-psych-vs-psych",
      q: "Чем психолог отличается от психиатра?",
      a: "Психолог работает с психически здоровыми людьми через разговор — без диагнозов и медикаментов. Психиатр — это врач, который ставит диагнозы и назначает лечение. Если вы испытываете тревогу, проблемы в отношениях, сниженное настроение или трудности с самооценкой — вам к психологу.",
    },
    {
      id: "faq-serious-problem",
      q: "Нужна ли «серьёзная проблема», чтобы обратиться?",
      a: "Нет. Большинство клиентов приходят с обычными жизненными трудностями: «что-то идёт не так», «застрял(а) на одном месте», «устал(а) от одних и тех же паттернов». Для обращения не нужен кризис — достаточно желания разобраться в себе.",
    },
    {
      id: "faq-anxiety",
      q: "Почему я постоянно тревожусь?",
      a: "Тревога — это сигнал тела о чём-то важном: неудовлетворённой потребности, незавершённой ситуации или усвоенной в детстве реакции. В работе мы исследуем источник тревоги и постепенно меняем автоматические реакции на осознанные.",
    },
    {
      id: "faq-need-help",
      q: "Как понять, что мне нужен психолог?",
      a: "Если вы замечаете, что одни и те же ситуации повторяются снова и снова, самостоятельные попытки не дают результата, или вы чувствуете себя застрявшим(ей) — это хороший повод обратиться. Не обязательно ждать, пока станет совсем плохо.",
    },
    {
      id: "faq-anger",
      q: "Почему я часто злюсь и раздражаюсь?",
      a: "Злость — одна из базовых эмоций, которая сигнализирует о нарушении границ или неудовлетворённой потребности. Часто за раздражительностью скрывается усталость, обида или тревога. В работе мы учимся слышать и выражать злость так, чтобы она помогала, а не разрушала отношения.",
    },
    {
      id: "faq-burnout",
      q: "Как справиться с выгоранием?",
      a: "Выгорание — это не слабость, а результат длительного игнорирования собственных потребностей. Работа с психологом помогает найти, что именно истощает, восстановить контакт с желаниями и выстроить режим, в котором есть место для себя.",
    },
  ],
  organization: [
    {
      id: "faq-format",
      q: "Как проходят сессии?",
      a: "Все сессии проходят онлайн — в видеоформате. Индивидуальная сессия длится 60 минут, парная — 90 минут. Вам понадобится тихое место и стабильный интернет. Платформу для связи согласуем заранее.",
    },
    {
      id: "faq-cancel",
      q: "Можно ли отменить или перенести консультацию?",
      a: "Если вы предупреждаете за 24 часа — консультацию можно перенести или вернуть предоплату. При отмене менее чем за 24 часа предоплата не возвращается. Если вы не предупредили и не пришли — предоплата также не возвращается.",
    },
    {
      id: "faq-count",
      q: "Сколько нужно встреч?",
      a: "Количество встреч индивидуально. В среднем для значимых изменений требуется около 10 сессий. Иногда достаточно 1–2 встреч, иногда работа занимает больше времени. Оптимальная частота — 1 раз в 7–14 дней.",
    },
    {
      id: "faq-prepare",
      q: "Нужно ли готовиться к первой встрече?",
      a: "Никакой специальной подготовки не нужно. Просто подумайте, с чем хотите прийти: что беспокоит, что хочется изменить. Первая встреча — это знакомство и совместное прояснение запроса, без давления и оценок.",
    },
  ],
  prices: [
    {
      id: "faq-prepay",
      q: "Почему запись по предоплате?",
      a: "Предоплата фиксирует выбранное вами время и подтверждает намерение. Это взаимное уважение к времени — вашему и моему.",
    },
    {
      id: "faq-free",
      q: "Есть ли бесплатная консультация?",
      a: "Нет. Любая встреча — это полноценная работа, которая требует времени и внимания. Краткое знакомство (15 минут) для ответа на организационные вопросы возможно по предварительному запросу.",
    },
    {
      id: "faq-includes",
      q: "Что входит в стоимость сессии?",
      a: "Стоимость включает саму сессию и, при необходимости, короткое сообщение между встречами по теме запроса. Дополнительных скрытых платежей нет.",
    },
  ],
  start: [
    {
      id: "faq-first",
      q: "Что происходит на первой сессии?",
      a: "На первой встрече мы знакомимся, я узнаю о вашем запросе и жизненном контексте, вы — о моём подходе. Вместе мы определяем, с чем и как будем работать. Никаких заданий и домашних упражнений без вашего согласия.",
    },
    {
      id: "faq-choose",
      q: "Как понять, подходит ли мне этот специалист?",
      a: "Главный критерий — ощущение безопасности и возможность говорить открыто. После 2–3 встреч обычно становится понятно, комфортно ли вам работать именно с этим человеком. Если нет — это нормально, и я помогу найти другого специалиста.",
    },
    {
      id: "faq-works",
      q: "Как понять, что терапия работает?",
      a: "Первые признаки: вы начинаете замечать свои реакции раньше, чем они захватывают; появляется больше выборов там, где раньше был автопилот; изменяется качество отношений с собой и другими. Изменения происходят постепенно, не всегда линейно.",
    },
    {
      id: "faq-not-ready",
      q: "Что если я не готов(а) к глубокой работе?",
      a: "Это нормально. Глубина работы определяется вашим темпом. Можно начать с конкретной ситуации или запроса и двигаться ровно настолько, насколько вам комфортно. Я не тороплю и не продавливаю.",
    },
  ],
};

// Flat map of all FAQ items by id, with their category — used by SeoQuestionsSection
export const faqById: Record<string, { category: Category }> = Object.entries(faqData).reduce(
  (acc, [cat, items]) => {
    items.forEach((item) => {
      acc[item.id] = { category: cat as Category };
    });
    return acc;
  },
  {} as Record<string, { category: Category }>
);

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("psychology");
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const activateByHash = (hash: string) => {
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    const entry = faqById[id];
    if (entry) {
      setActiveCategory(entry.category);
      setOpenItem(id);
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      activateByHash(window.location.hash);
    }

    const handleHashChange = () => {
      if (window.location.hash) {
        activateByHash(window.location.hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const items = faqData[activeCategory];

  return (
    <AnimatedSection className="section-padding" id="faq">
      <div className="container-narrow max-w-3xl">
        <p className="label-caps mb-4">Вопросы</p>
        <h2 className="text-3xl md:text-5xl font-medium mb-8">FAQ</h2>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(key);
                setOpenItem(undefined);
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="space-y-2"
        >
          {items.map((f) => (
            <AccordionItem
              key={f.id}
              value={f.id}
              className="border-none card-premium px-6"
            >
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
};

export default FaqSection;
