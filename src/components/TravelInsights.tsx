import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function TravelInsights() {
  const articles = [
    {
      title: '10 секретов бюджетных путешествий',
      category: 'Советы',
      readTime: '5 мин',
      image: 'https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/fe2de202-0041-4ca8-adbe-4f6b478d3b04.jpg',
      excerpt: 'Как путешествовать больше, тратя меньше'
    },
    {
      title: 'Топ-5 направлений 2025 года',
      category: 'Тренды',
      readTime: '7 мин',
      image: 'https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/4f451952-2e61-47d7-a7dd-a6acb81333a0.jpg',
      excerpt: 'Куда поедут путешественники в новом году'
    },
    {
      title: 'Виртуальные туры: будущее уже здесь',
      category: 'Технологии',
      readTime: '4 мин',
      image: 'https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/cfc24f8c-f9a2-4ea9-9f18-1554694a6ab3.jpg',
      excerpt: 'VR и AR меняют индустрию путешествий'
    },
    {
      title: 'Экологичный туризм: как путешествовать ответственно',
      category: 'Экология',
      readTime: '6 мин',
      image: 'https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/7546b9c3-fefc-44e2-ab31-9dfdf04a58b8.jpg',
      excerpt: 'Сохраняем планету для будущих поколений'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="BookOpen" className="text-primary" size={18} />
            <span className="text-sm font-medium">Блог</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Travel Insights</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Полезные статьи и советы для современных путешественников
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, idx) => (
            <Card 
              key={idx} 
              className="group overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 glow-hover cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-primary/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white text-xs bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                  <Icon name="Clock" size={12} />
                  {article.readTime}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto font-semibold text-primary hover:gap-2 transition-all group/btn">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-1 group-hover/btn:ml-2 transition-all" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="glow-hover">
            <Icon name="BookOpen" className="mr-2" size={18} />
            Все статьи
          </Button>
        </div>
      </div>
    </section>
  );
}