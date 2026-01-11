import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Epic RPG Interface',
      category: 'Game UI',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80'
    },
    {
      id: 2,
      title: 'Cyberpunk Banner Set',
      category: 'Banners',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80'
    },
    {
      id: 3,
      title: 'Dragon Gaming Logo',
      category: 'Logo Design',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80'
    },
    {
      id: 4,
      title: 'Sci-Fi HUD Design',
      category: 'Game UI',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=1200&q=80'
    },
    {
      id: 5,
      title: 'Esports Team Identity',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80'
    },
    {
      id: 6,
      title: 'Fantasy Game Icons',
      category: 'Icon Pack',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&q=80'
    },
    {
      id: 7,
      title: 'Mobile Game UI Kit',
      category: 'UI Kit',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80'
    },
    {
      id: 8,
      title: 'Neon Battle Arena',
      category: 'Environment',
      image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80'
    },
    {
      id: 9,
      title: 'Medieval Quest UI',
      category: 'Game UI',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80'
    },
    {
      id: 10,
      title: 'Streaming Overlay Pack',
      category: 'Overlay',
      image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1200&q=80'
    }
  ];

  const services = [
    {
      icon: 'Gamepad2',
      title: 'Game UI Design',
      description: 'Создаем интерфейсы для игр любых жанров с учетом UX и визуальной привлекательности'
    },
    {
      icon: 'Image',
      title: 'Баннеры и Промо',
      description: 'Разрабатываем яркие баннеры для игровых проектов, стримов и киберспортивных событий'
    },
    {
      icon: 'Sparkles',
      title: 'Логотипы и Брендинг',
      description: 'Создаем запоминающиеся логотипы для игровых студий, команд и проектов'
    },
    {
      icon: 'Layers',
      title: 'Иконки и Ассеты',
      description: 'Разрабатываем наборы игровых иконок, предметов и визуальных элементов'
    },
    {
      icon: 'Palette',
      title: 'Арты и Концепты',
      description: 'Рисуем концепт-арты персонажей, окружения и игровых объектов'
    },
    {
      icon: 'Zap',
      title: 'Анимация UI',
      description: 'Оживляем интерфейсы анимацией для лучшего игрового опыта'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Gamepad2" size={32} className="text-primary animate-pulse-glow" />
            <span className="text-2xl font-bold glow-text">GameDesign Studio</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {['home', 'portfolio', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'portfolio' && 'Портфолио'}
                {section === 'services' && 'Услуги'}
                {section === 'contact' && 'Контакты'}
              </button>
            ))}
          </div>

          <Button className="glow-effect">
            Связаться
          </Button>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen relative overflow-hidden pt-24 pb-12"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
              <span className="text-primary font-semibold text-sm">🎮 Gaming Design Studio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Creative Works
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Портфолио игрового дизайна: UI/UX, баннеры, логотипы и концепт-арты
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Все проекты', 'Game UI', 'Banners', 'Logos', 'Concepts'].map((filter) => (
                <Button
                  key={filter}
                  variant={filter === 'Все проекты' ? 'default' : 'outline'}
                  size="sm"
                  className={filter === 'Все проекты' ? 'glow-effect' : 'border-border hover:border-primary/50'}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-card/50 border border-border/30 hover:border-primary/20 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6 bg-card/80 backdrop-blur-sm">
                  <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">{item.category}</div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/20 rounded-full border border-primary/50">
              <span className="text-primary font-semibold">💎 Наши Работы</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 glow-text">Портфолио</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Проекты, которые подчеркивают нашу креативность и экспертизу в игровом дизайне
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer bg-card/80 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-primary/80 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Icon name="Eye" className="mr-2" />
              Показать Больше Работ
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 rounded-full border border-secondary/50">
              <span className="text-secondary font-semibold">⚡ Что Мы Делаем</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 glow-text">Услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр дизайн-услуг для игровой индустрии
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-effect cursor-pointer bg-card/80 backdrop-blur group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/20 rounded-full border border-accent/50">
                <span className="text-accent font-semibold">📬 Свяжитесь С Нами</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 glow-text">Контакты</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Готовы обсудить ваш проект? Напишите нам!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 border-border bg-card/80 backdrop-blur hover:border-primary/50 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Mail" size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-muted-foreground mb-3">Отправьте нам письмо</p>
                <a href="mailto:hello@gamedesign.studio" className="text-primary hover:underline">
                  hello@gamedesign.studio
                </a>
              </Card>

              <Card className="p-8 border-border bg-card/80 backdrop-blur hover:border-secondary/50 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="MessageCircle" size={28} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Telegram</h3>
                <p className="text-muted-foreground mb-3">Напишите в мессенджер</p>
                <a href="https://t.me/gamedesignstudio" className="text-secondary hover:underline">
                  @gamedesignstudio
                </a>
              </Card>
            </div>

            <Card className="p-8 border-border bg-card/80 backdrop-blur">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="ivan@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Тема проекта</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Дизайн UI для RPG игры"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                <Button size="lg" className="w-full text-lg py-6 glow-effect">
                  <Icon name="Send" className="mr-2" />
                  Отправить Заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Gamepad2" size={32} className="text-primary" />
              <span className="text-xl font-bold">GameDesign Studio</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © 2024 GameDesign Studio. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;