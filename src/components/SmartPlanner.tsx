import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function SmartPlanner() {
  const [plannerData, setPlannerData] = useState({
    budget: [150000],
    startDate: '',
    endDate: '',
    people: 2,
    travelType: ''
  });
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateRoute = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setRecommendations([
        {
          title: 'Азиатское приключение',
          destinations: ['Токио', 'Сингапур', 'Бали'],
          price: '145 000 ₽',
          match: 95
        },
        {
          title: 'Европейский тур',
          destinations: ['Париж', 'Рим', 'Барселона'],
          price: '128 000 ₽',
          match: 88
        },
        {
          title: 'Экзотика премиум',
          destinations: ['Мальдивы', 'Дубай'],
          price: '150 000 ₽',
          match: 92
        }
      ]);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Sparkles" className="text-primary" size={18} />
            <span className="text-sm font-medium">AI-Технология</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Smart Planner</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Искусственный интеллект создаст идеальный маршрут на основе ваших предпочтений
          </p>
        </div>

        <Card className="max-w-5xl mx-auto glass border-2 border-primary/20 glow">
          <CardContent className="p-6 md:p-10">
            <div className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3">Бюджет на человека</label>
                  <div className="space-y-3">
                    <Slider
                      value={plannerData.budget}
                      onValueChange={(value) => setPlannerData({...plannerData, budget: value})}
                      max={500000}
                      min={30000}
                      step={10000}
                      className="w-full"
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{plannerData.budget[0].toLocaleString()} ₽</span>
                      <span className="text-sm text-muted-foreground">до 500 000 ₽</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Количество путешественников</label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setPlannerData({...plannerData, people: Math.max(1, plannerData.people - 1)})}
                      className="h-12 w-12"
                    >
                      <Icon name="Minus" size={18} />
                    </Button>
                    <div className="flex-1 text-center">
                      <p className="text-3xl font-bold">{plannerData.people}</p>
                      <p className="text-sm text-muted-foreground">человек</p>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setPlannerData({...plannerData, people: plannerData.people + 1})}
                      className="h-12 w-12"
                    >
                      <Icon name="Plus" size={18} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3">Дата начала</label>
                  <Input
                    type="date"
                    value={plannerData.startDate}
                    onChange={(e) => setPlannerData({...plannerData, startDate: e.target.value})}
                    className="bg-white/80 h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3">Дата окончания</label>
                  <Input
                    type="date"
                    value={plannerData.endDate}
                    onChange={(e) => setPlannerData({...plannerData, endDate: e.target.value})}
                    className="bg-white/80 h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">Тип отдыха</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['🏖️ Пляж', '🏔️ Горы', '🏛️ Культура', '🎢 Активный'].map((type) => (
                    <Button
                      key={type}
                      variant={plannerData.travelType === type ? 'default' : 'outline'}
                      onClick={() => setPlannerData({...plannerData, travelType: type})}
                      className="h-14 text-sm md:text-base"
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                onClick={generateRoute}
                disabled={isGenerating}
                className="w-full glow-hover text-lg py-6 md:py-7"
              >
                {isGenerating ? (
                  <>
                    <Icon name="Loader2" className="mr-2 animate-spin" size={22} />
                    Генерируем маршрут...
                  </>
                ) : (
                  <>
                    <Icon name="Sparkles" className="mr-2" size={22} />
                    Сгенерировать маршрут
                  </>
                )}
              </Button>
            </div>

            {recommendations.length > 0 && (
              <div className="mt-8 md:mt-10 pt-8 border-t border-border animate-fade-in">
                <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="Target" className="text-primary" size={24} />
                  Рекомендуемые маршруты
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {recommendations.map((rec, idx) => (
                    <Card key={idx} className="border-2 border-border/50 hover:border-primary/50 transition-all glow-hover">
                      <CardContent className="p-5 md:p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h4 className="font-bold text-lg mb-2">{rec.title}</h4>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {rec.destinations.map((dest: string, i: number) => (
                                <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                  {dest}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="ml-2 flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">
                            <Icon name="Check" size={12} />
                            {rec.match}%
                          </div>
                        </div>
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground">от</p>
                            <p className="text-xl md:text-2xl font-bold text-primary">{rec.price}</p>
                          </div>
                          <Button size="sm" className="glow-hover">
                            Выбрать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
