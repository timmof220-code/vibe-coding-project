import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <AnimatedSection className="section-padding bg-secondary/50" id="about">
    <div className="container-narrow">
      <p className="label-caps mb-4">Обо мне</p>
      <h2 className="text-3xl md:text-5xl font-medium mb-12">Психолог-консультант и&nbsp;сексолог</h2>

      <div className="container-prose space-y-6 text-muted-foreground">
        <p>
          Мой профессиональный путь начался в IT — я работала с командами и сложными проектами. Этот опыт помогает мне понимать людей интеллектуальных профессий: высокий уровень ответственности, постоянное напряжение, жизнь «в&nbsp;голове», перфекционизм и эмоциональное выгорание.
        </p>
        <p>
          Психология помогла мне выстроить внутренний фундамент, снизить внутренний шум, проработать травматичный опыт и научиться лучше слышать себя и своё тело.
        </p>
        <p>
          Сегодня я сопровождаю клиентов в бережной и глубокой психологической работе.
        </p>
      </div>

      {/* IT → Psychology bridge */}
      <div className="mt-16 flex items-center justify-center gap-4">
        <div className="flex flex-col items-center">
          <span className="label-caps">Логика</span>
          <span className="text-xs text-muted-foreground mt-1">IT / Аналитика</span>
        </div>
        <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-foreground/20 via-primary to-foreground/20" />
        <div className="flex flex-col items-center">
          <span className="label-caps">Чувства</span>
          <span className="text-xs text-muted-foreground mt-1">Психология</span>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;
