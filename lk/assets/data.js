/* Справочники из шаблона Excel + мок-данные прототипа.
   Источник полей: openapi PermanentVacancy / PermanentVacancyLead. */

const DICT = {
  brands: ["Перекрёсток", "Пятёрочка", "Снежная королева", "Магнит", "ВкусВилл"],
  employment_type: ["Полная", "Частичная", "Стажировка", "Вахта"],
  work_format: ["На месте работодателя", "Удаленно", "Гибрид", "Разъездной"],
  work_schedule: ["Сменный график", "Свободный график", "По выходным", "2/2", "5/2", "6/1", "3/3", "4/4", "4/3", "4/2", "3/2", "2/1", "1/3", "1/2", "Другое"],
  experience: ["Без опыта", "До 1 года", "От 1 года до 3 лет", "От 3 до 6 лет", "Более 6 лет"],
  gender: ["Любой", "Мужской", "Женский"],
  job_type: ["Грузчик / разгрузчик", "Сборщик заказов", "Комплектовщик", "Кладовщик", "Работник склада",
    "Кассир", "Продавец-консультант", "Продавец-кассир", "Мерчандайзер", "Повар", "Пекарь", "Бариста",
    "Курьер пеший", "Курьер на авто", "Оператор ПВЗ", "Уборщик", "Администратор"],
  regions: ["Москва", "Московская обл.", "Санкт-Петербург", "Екатеринбург", "Казань", "Новосибирск"],
};

// Торговые точки (адреса вакансий) — Москва, для геопоиска
const STORES = [
  { id: "s1", brand: "Перекрёсток", title: "ТЦ «Авиапарк»", address: "Москва, Ходынский б-р, 4", lat: 55.7898, lng: 37.5325 },
  { id: "s2", brand: "Пятёрочка",  title: "Магазин у дома",  address: "Москва, ул. Тверская, 12",  lat: 55.7615, lng: 37.6080 },
  { id: "s3", brand: "ВкусВилл",   title: "Даркстор Север",  address: "Москва, ул. Лесная, 5",      lat: 55.7790, lng: 37.5890 },
];

// Вакансии (форма openapi PermanentVacancy)
const VACANCIES = [
  { advertisement_id: "VG-100245", brand: "Перекрёсток", job_type: "Кассир", employment_type: "Полная", work_format: "На месте работодателя", work_schedule: "2/2", experience: "Без опыта", wage: { from: 55000, to: 70000 }, address: "Москва, Ходынский б-р, 4", store: "s1", metro: "ЦСКА", status: "active", leads: 14, expires_at: "2026-06-28", created: "2026-06-10" },
  { advertisement_id: "VG-100246", brand: "Перекрёсток", job_type: "Повар", employment_type: "Полная", work_format: "На месте работодателя", work_schedule: "5/2", experience: "От 1 года до 3 лет", wage: { from: 70000, to: 95000 }, address: "Москва, Ходынский б-р, 4", store: "s1", metro: "ЦСКА", status: "active", leads: 8, expires_at: "2026-06-22", created: "2026-06-08" },
  { advertisement_id: "VG-100247", brand: "Пятёрочка", job_type: "Продавец-кассир", employment_type: "Частичная", work_format: "На месте работодателя", work_schedule: "Свободный график", experience: "Без опыта", wage: { from: 40000, to: 52000 }, address: "Москва, ул. Тверская, 12", store: "s2", metro: "Тверская", status: "active", leads: 21, expires_at: "2026-06-19", created: "2026-06-05" },
  { advertisement_id: "VG-100248", brand: "ВкусВилл", job_type: "Сборщик заказов", employment_type: "Вахта", work_format: "На месте работодателя", work_schedule: "6/1", experience: "Без опыта", wage: { from: 80000, to: 120000 }, address: "Москва, ул. Лесная, 5", store: "s3", metro: "Белорусская", status: "active", leads: 5, expires_at: "2026-07-05", created: "2026-06-12" },
  { advertisement_id: "VG-100249", brand: "ВкусВилл", job_type: "Курьер на авто", employment_type: "Полная", work_format: "Разъездной", work_schedule: "5/2", experience: "До 1 года", wage: { from: 90000, to: 130000 }, address: "Москва, ул. Лесная, 5", store: "s3", metro: "—", status: "paused", leads: 3, expires_at: "2026-06-30", created: "2026-06-11" },
  { advertisement_id: "VG-100250", brand: "Снежная королева", job_type: "Продавец-консультант", employment_type: "Полная", work_format: "На месте работодателя", work_schedule: "2/2", experience: "От 1 года до 3 лет", wage: { from: 60000, to: 85000 }, address: "Москва, Ходынский б-р, 4", store: "s1", metro: "ЦСКА", status: "expired", leads: 17, expires_at: "2026-06-15", created: "2026-05-28" },
];

// Отклики (openapi PermanentVacancyLead) + дата
const FIRST = ["Иван","Мария","Алексей","Ольга","Дмитрий","Екатерина","Сергей","Анна","Павел","Наталья","Артём","Юлия","Никита","Дарья","Роман","Светлана"];
const LAST = ["Соколов","Кузнецова","Попов","Морозова","Волков","Лебедева","Новиков","Орлова","Зайцев","Павлова","Сидоров","Козлова","Фёдоров","Михайлова","Тарасов","Белова"];
function buildLeads() {
  const out = []; let id = 5000;
  const seeds = [
    ["VG-100247", 21], ["VG-100250", 17], ["VG-100245", 14], ["VG-100246", 8], ["VG-100248", 5], ["VG-100249", 3],
  ];
  seeds.forEach(([adv, n]) => {
    const v = VACANCIES.find(x => x.advertisement_id === adv);
    for (let i = 0; i < n; i++) {
      const g = Math.random() > .5 ? "Мужской" : "Женский";
      const fn = (g === "Мужской" ? FIRST[Math.floor(Math.random()*8)*2 % FIRST.length] : FIRST[1]) ;
      const full = `${LAST[(id+i)%LAST.length]} ${FIRST[(id+i*3)%FIRST.length]}`;
      out.push({
        id: id++, advertisement_id: adv, brand: v.brand, job_type: v.job_type,
        full_name: full, phone: `+7 9${String(10+ (id%89)).padStart(2,'0')} ${100+id%900}-${10+id%90}-${10+id%89}`,
        email: Math.random()>.4 ? `user${id}@mail.ru` : null,
        gender: g, age: 18 + (id % 30), region: DICT.regions[id % DICT.regions.length],
        created_at: `2026-06-${String(8 + (id % 10)).padStart(2,'0')}`,
        status: ["Новый","Просмотрен","Приглашён"][id % 3],
      });
    }
  });
  return out;
}
const LEADS = buildLeads();

// Отдельная база кандидатов с координатами (для геопоиска у точки)
function buildCandidates() {
  const out = [];
  const jobs = DICT.job_type;
  STORES.forEach(s => {
    const n = 14 + Math.floor(Math.random()*8);
    for (let i = 0; i < n; i++) {
      // случайное смещение в пределах ~5 км
      const dLat = (Math.random()-0.5) * 0.09;
      const dLng = (Math.random()-0.5) * 0.16;
      out.push({
        id: `c${s.id}-${i}`,
        full_name: `${LAST[(i*3)%LAST.length]} ${FIRST[(i*5)%FIRST.length]}`,
        job: jobs[(i+ s.id.length) % jobs.length],
        exp: DICT.experience[i % DICT.experience.length],
        gender: i%2 ? "Мужской":"Женский", age: 18 + (i%32),
        lat: s.lat + dLat, lng: s.lng + dLng,
      });
    }
  });
  return out;
}
const CANDIDATES = buildCandidates();

// Шаблоны вакансий
const TEMPLATES = [
  { id: "t1", name: "Кассир — стандарт (Перекрёсток)", job_type: "Кассир", brand: "Перекрёсток", employment_type: "Полная", schedule: "2/2", wage: "55 000 – 70 000 ₽", used: 12, updated: "2026-06-09" },
  { id: "t2", name: "Повар — кухня ТЦ", job_type: "Повар", brand: "Перекрёсток", employment_type: "Полная", schedule: "5/2", wage: "70 000 – 95 000 ₽", used: 6, updated: "2026-06-01" },
  { id: "t3", name: "Сборщик заказов — вахта", job_type: "Сборщик заказов", brand: "ВкусВилл", employment_type: "Вахта", schedule: "6/1", wage: "80 000 – 120 000 ₽", used: 4, updated: "2026-05-22" },
];

function money(w) {
  if (!w) return "—";
  const f = n => n.toLocaleString("ru-RU");
  return w.to && w.to !== w.from ? `${f(w.from)} – ${f(w.to)} ₽` : `от ${f(w.from)} ₽`;
}
function statusBadge(s) {
  return ({
    active:  '<span class="badge green"><span class="dot"></span>Активна</span>',
    paused:  '<span class="badge amber"><span class="dot"></span>На паузе</span>',
    expired: '<span class="badge red"><span class="dot"></span>Истекла</span>',
  })[s] || `<span class="badge gray">${s}</span>`;
}
