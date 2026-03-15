import { motion } from "framer-motion";
import heroImg from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center section-padding pt-28">
      <div className="container-narrow grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          className="md:col-span-3 space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1]">
            Я помогаю взрослым и&nbsp;парам восстановить контакт с&nbsp;собой, чувствами и&nbsp;отношениями
          </h1>
          <div className="space-y-3">
            <p className="text-lg text-muted-foreground">
              Психолог-консультант и сексолог.<br />
              Бережная и глубинная работа с тревогой, самооценкой, кризисами и сексуальностью.
            </p>
            <p className="text-sm text-muted-foreground">
              Онлайн-консультации для взрослых и пар.<br />
              Для тех, кто хочет реальных изменений, а не быстрых советов.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("#cta")}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-sm font-medium"
            >
              Записаться на консультацию
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("#contacts")}
              className="text-sm font-medium px-8 py-3.5 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-colors"
            >
              Обсудить запрос
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          className="md:col-span-2"
        >
          <div className="rounded-3xl overflow-hidden">
            <img
              src={heroImg}
              alt="Психолог-консультант Анна Тим"
              className="w-full h-auto object-cover aspect-[3/4]"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
