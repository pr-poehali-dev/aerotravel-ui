import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import InteractiveMap from '@/components/InteractiveMap';
import SmartPlanner from '@/components/SmartPlanner';
import TravelCalculator from '@/components/TravelCalculator';
import TravelInsights from '@/components/TravelInsights';
import VRPreview from '@/components/VRPreview';
import AICategories from '@/components/AICategories';
import PartnersSection from '@/components/PartnersSection';
import MembershipSection from '@/components/MembershipSection';
import WeatherGuide from '@/components/WeatherGuide';
import ChatSupport from '@/components/ChatSupport';

export default function Index() {
  const [searchData, setSearchData] = useState({
    destination: '',
    date: '',
    type: ''
  });

  const destinations = [
    { name: 'Токио', country: 'Япония', price: '89 000 ₽', image: 'https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/4f49c3fb-6c93-4334-8ebd-e474265bd807.jpg' },
    { name: 'Нью-Йорк', country: 'США', price: '120 000 ₽', image: 'https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/15ed8c6f-67c5-4aa2-a04b-d181c8d9775d.jpg' },
    { name: 'Париж', country: 'Франция', price: '95 000 ₽', image: 'https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/a6d98781-7a93-4cd2-afcc-b617914af7ad.jpg' },
    { name: 'Дубай', country: 'ОАЭ', price: '75 000 ₽', image: 'https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/4f451952-2e61-47d7-a7dd-a6acb81333a0.jpg' },
    { name: 'Сингапур', country: 'Сингапур', price: '110 000 ₽', image: 'https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/acc132d2-e4a7-452a-9e54-f4c2f8e01a64.jpg' },
    { name: 'Мальдивы', country: 'Мальдивы', price: '150 000 ₽', image: 'https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/cf2f5c04-8e59-4a1d-bb1c-be937bfa9001.jpg' }
  ];

  const offers = [
    { title: 'Весь мир за 7 дней', description: 'Эксклюзивный тур по 5 странам', price: '299 000 ₽', discount: '-20%' },
    { title: 'Космический круиз', description: 'Роскошный круиз премиум класса', price: '450 000 ₽', discount: '-15%' },
    { title: 'Азия 2025', description: 'Открой будущее уже сегодня', price: '85 000 ₽', discount: '-30%' }
  ];

  const advantages = [
    { icon: 'Shield', title: 'Безопасность', description: 'Полная страховка и поддержка 24/7' },
    { icon: 'Sparkles', title: 'AI-подбор', description: 'Умный алгоритм подбора идеального тура' },
    { icon: 'Globe', title: 'Эксклюзив', description: 'Уникальные направления и предложения' },
    { icon: 'Headphones', title: 'Сервис', description: 'Премиальная поддержка клиентов' }
  ];

  const reviews = [
    { name: 'Анна Петрова', text: 'Невероятный сервис! AI подобрал идеальный тур для нашей семьи. Все прошло как по маслу.', rating: 5 },
    { name: 'Дмитрий Козлов', text: 'Футуристический подход к бронированию. Быстро, удобно, технологично. Рекомендую!', rating: 5 },
    { name: 'Елена Волкова', text: 'Лучшее туристическое агентство! Команда профессионалов, отличные цены и маршруты.', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-muted to-blue-50">
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center glow">
              <Icon name="Plane" className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold text-gradient">AeroTravel</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#destinations" className="text-sm font-medium hover:text-primary transition-colors">Направления</a>
            <a href="#offers" className="text-sm font-medium hover:text-primary transition-colors">Предложения</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <Button variant="outline" className="glow-hover">Войти</Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Discover the Future
            <br />
            <span className="text-gradient">of Travel</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            Погрузитесь в мир путешествий будущего. Искусственный интеллект подберет идеальный маршрут специально для вас.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="glow-hover text-base md:text-lg px-6 md:px-8 py-5 md:py-6">
              <Icon name="Search" className="mr-2" size={20} />
              Найти тур
            </Button>
            <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Популярные направления</h2>
            <p className="text-base md:text-lg text-muted-foreground">Исследуйте мир с комфортом и стилем</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, idx) => (
              <Card 
                key={idx} 
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-border/50 hover:border-primary/50 glow-hover cursor-pointer"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl md:text-2xl font-bold">{dest.name}</h3>
                    <p className="text-xs md:text-sm opacity-90">{dest.country}</p>
                  </div>
                </div>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">от</p>
                      <p className="text-xl md:text-2xl font-bold text-primary">{dest.price}</p>
                    </div>
                    <Button className="glow-hover" size="icon">
                      <Icon name="ArrowRight" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">AI Trip Finder</h2>
            <p className="text-base md:text-lg text-muted-foreground">Умный поиск идеального путешествия</p>
          </div>
          <Card className="max-w-4xl mx-auto glass border-2 border-primary/20 glow p-4 md:p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Направление</label>
                  <Input 
                    placeholder="Куда летим?"
                    value={searchData.destination}
                    onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                    className="bg-white/80"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Даты</label>
                  <Input 
                    type="date"
                    value={searchData.date}
                    onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                    className="bg-white/80"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тип отдыха</label>
                  <Input 
                    placeholder="Пляж, экскурсии..."
                    value={searchData.type}
                    onChange={(e) => setSearchData({...searchData, type: e.target.value})}
                    className="bg-white/80"
                  />
                </div>
              </div>
              <Button className="w-full glow-hover text-lg py-6">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Подобрать идеальный тур
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему мы?</h2>
            <p className="text-muted-foreground text-lg">Технологии будущего для вашего комфорта</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="text-center p-6 hover:shadow-xl transition-all duration-300 border-2 border-border/50 hover:border-primary/50 group">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center glow group-hover:scale-110 transition-transform">
                    <Icon name={adv.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground text-sm">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные предложения</h2>
            <p className="text-muted-foreground text-lg">Эксклюзивные туры со скидками</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, idx) => (
              <Card key={idx} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-border/50 hover:border-primary/50 glow-hover">
                <div className="absolute top-4 right-4 bg-destructive text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse-glow">
                  {offer.discount}
                </div>
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 glow">
                    <Icon name="Zap" className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">{offer.description}</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">от</p>
                      <p className="text-2xl md:text-3xl font-bold text-primary">{offer.price}</p>
                    </div>
                    <Button className="glow-hover w-full sm:w-auto">Бронировать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground text-lg">Что говорят о нас путешественники</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-border/50">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <InteractiveMap />
      <SmartPlanner />
      <TravelCalculator />
      <AICategories />
      <TravelInsights />
      <VRPreview />
      <WeatherGuide />
      <PartnersSection />
      <MembershipSection />

      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center glow">
                  <Icon name="Plane" className="text-white" size={20} />
                </div>
                <span className="text-2xl font-bold">AeroTravel</span>
              </div>
              <p className="text-slate-400 text-sm">Путешествия будущего уже сегодня</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="rounded-full glow-hover">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full glow-hover">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full glow-hover">
                  <Icon name="Twitter" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>© 2025 AeroTravel. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <ChatSupport />
    </div>
  );
}