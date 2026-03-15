import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Send, Phone } from "lucide-react";

const ContactsSection = () => {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatedSection className="section-padding" id="contacts">
      <div className="container-narrow">
        <p className="label-caps mb-4">Контакты</p>
        <h2 className="text-3xl md:text-5xl font-medium mb-12">Свяжитесь со мной</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <div className="space-y-6">
            <a
              href="https://t.me/AnnaTim"
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium p-6 flex items-center gap-4 group"
            >
              <Send size={20} className="text-primary" />
              <div>
                <p className="label-caps mb-1">Telegram</p>
                <p className="text-sm">@AnnaTim</p>
              </div>
            </a>

            <a href="tel:+79221335008" className="card-premium p-6 flex items-center gap-4 group">
              <Phone size={20} className="text-primary" />
              <div>
                <p className="label-caps mb-1">Телефон</p>
                <p className="text-sm">+7 922 133 50 08</p>
              </div>
            </a>
          </div>

          <div className="card-premium p-8">
            {submitted ? (
              <div className="text-center py-8">
                <p className="font-display text-xl font-medium mb-2">Спасибо!</p>
                <p className="text-sm text-muted-foreground">Я свяжусь с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-lg font-medium mb-4">Оставить заявку</h3>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary/80 rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/60 outline-none focus:ring-1 focus:ring-primary/30 transition"
                />
                <input
                  type="text"
                  placeholder="Telegram или телефон"
                  required
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full bg-secondary/80 rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/60 outline-none focus:ring-1 focus:ring-primary/30 transition"
                />
                <textarea
                  placeholder="Кратко опишите ваш запрос"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary/80 rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/60 outline-none focus:ring-1 focus:ring-primary/30 transition resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-primary-foreground text-sm py-3 rounded-xl"
                >
                  Отправить
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactsSection;
