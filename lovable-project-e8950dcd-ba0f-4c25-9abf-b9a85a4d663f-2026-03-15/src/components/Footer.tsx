const Footer = () => (
  <footer className="section-padding py-12 border-t border-foreground/5">
    <div className="container-narrow">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Анна Тим. Все права защищены.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">
            Политика конфиденциальности
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Согласие на обработку данных
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
