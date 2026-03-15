import AnimatedSection from "./AnimatedSection";
import { Check, X, AlertTriangle } from "lucide-react";

const ForWhomSection = () => (
  <AnimatedSection className="section-padding">
    <div className="container-narrow">
      <p className="label-caps mb-4">Формат</p>
      <h2 className="text-3xl md:text-5xl font-medium mb-16">Для кого я работаю</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        <div className="card-premium p-8">
          <h3 className="font-display text-xl font-medium mb-6">Подходит вам, если:</h3>
          <ul className="space-y-3">
            {[
              "вы взрослый мужчина или женщина",
              "вы переживаете кризис в отношениях",
              "вы чувствуете тревогу или эмоциональную усталость",
              "вы хотите глубже понять себя",
              "вы готовы к психологической работе",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="card-premium p-8">
            <h3 className="font-display text-xl font-medium mb-4">Не подхожу, если:</h3>
            <p className="flex items-start gap-3 text-sm text-muted-foreground">
              <X size={16} className="mt-0.5 shrink-0 text-foreground/30" />
              вы ищете быстрые советы без глубокой работы
            </p>
          </div>
          <div className="card-premium p-8">
            <p className="flex items-start gap-3 text-sm text-muted-foreground">
              <AlertTriangle size={16} className="mt-0.5 shrink-0 text-foreground/30" />
              Я не работаю с химическими зависимостями и суицидальными состояниями.
            </p>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default ForWhomSection;
