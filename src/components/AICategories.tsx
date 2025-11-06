import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function AICategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    {
      icon: 'Heart',
      title: 'Романтические путешествия',
      description: 'Идеальные направления для пар',
      gradient: 'from-pink-500 to-rose-500',
      tours: ['Париж', 'Венеция', 'Санторини'],
      price: 'от 95 000 ₽'
    },
    {
      icon: 'Zap',
      title: 'Для экстремалов',
      description: 'Адреналин и приключения',
      gradient: 'from-orange-500 to-red-500',
      tours: ['Новая Зеландия', 'Непал', 'Исландия'],
      price: 'от 150 000 ₽'
    },
    {
      icon: 'Palmtree',
      title: 'Спокойный отдых',
      description: 'Релакс и умиротворение',
      gradient: 'from-teal-500 to-cyan-500',
      tours: ['Мальдивы', 'Бали', 'Сейшелы'],
      price: 'от 120 000 ₽'
    },
    {
      icon: 'Crown',
      title: 'Премиум туры',
      description: 'Роскошь и эксклюзив',
      gradient: 'from-amber-500 to-yellow-500',
      tours: ['Монако', 'Дубай', 'Токио'],
      price: 'от 250 000 ₽'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Sparkles" className="text-primary" size={18} />
            <span className="text-sm font-medium">AI-Подборки</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Специальные подборки</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Искусственный интеллект подобрал лучшие направления по категориям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category, idx) => (
            <Card
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-500 cursor-pointer"
              style={{
                transform: hoveredIndex === idx ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredIndex === idx ? '0 20px 40px rgba(139, 92, 246, 0.3)' : 'none'
              }}
            >
              <CardContent className="p-6 md:p-8 relative">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-10 rounded-full blur-2xl transition-all duration-500 ${hoveredIndex === idx ? 'scale-150' : 'scale-100'}`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 md:w-16 md:h-16 mb-6 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center glow transition-all duration-300 ${hoveredIndex === idx ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                    <Icon name={category.icon as any} className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>

                  <div className="mb-4 space-y-2">
                    {category.tours.map((tour, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 text-sm"
                        style={{
                          opacity: hoveredIndex === idx ? 1 : 0.7,
                          transform: hoveredIndex === idx ? 'translateX(4px)' : 'translateX(0)',
                          transition: `all 0.3s ease ${i * 0.1}s`
                        }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                        <span>{tour}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground mb-2">Туры от</p>
                    <p className="text-2xl font-bold text-primary mb-4">{category.price}</p>
                    <Button 
                      className="w-full glow-hover"
                      style={{
                        opacity: hoveredIndex === idx ? 1 : 0.9,
                        transform: hoveredIndex === idx ? 'scale(1.05)' : 'scale(1)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Смотреть туры
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
