import AnimatedSection from "./AnimatedSection";

const methods = [
  "психологическое консультирование",
  "работа с эмоциями и чувствами",
  "анализ повторяющихся сценариев",
  "работа с кризисными переживаниями",
  "работа с травматическим опытом",
  "методы работы с бессознательными процессами",
  "элементы гипноза и регресса",
  "терапевтические отношения как основа изменений",
];

const qualities = ["бережный", "глубинный", "профессиональный", "этичный"];

const MethodsSection = () => (
  <AnimatedSection className="section-padding" id="methods">
    <div className="container-narrow">
      <p className="label-caps mb-4">Подход</p>
      <h2 className="text-3xl md:text-5xl font-medium mb-12">Мои подходы и&nbsp;методы</h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
        <div>
          <h3 className="font-display text-xl font-medium mb-6">Использую:</h3>
          <ul className="space-y-3">
            {methods.map((m) => (
              <li key={m} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl font-medium mb-6">Мой подход:</h3>
          <div className="flex flex-wrap gap-3">
            {qualities.map((q) => (
              <span
                key={q}
                className="label-caps px-4 py-2 bg-secondary rounded-xl"
              >
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default MethodsSection;
