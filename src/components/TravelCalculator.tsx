import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

export default function TravelCalculator() {
  const [calcData, setCalcData] = useState({
    destination: 'tokyo',
    duration: '7',
    hotel: '4star',
    people: 2
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const destinations = {
    tokyo: { name: 'Токио', base: 45000 },
    paris: { name: 'Париж', base: 38000 },
    dubai: { name: 'Дубай', base: 32000 },
    maldives: { name: 'Мальдивы', base: 65000 },
    newyork: { name: 'Нью-Йорк', base: 52000 }
  };

  const hotelRates = {
    '3star': { name: '3 звезды', multiplier: 1 },
    '4star': { name: '4 звезды', multiplier: 1.4 },
    '5star': { name: '5 звезд', multiplier: 2 },
    'luxury': { name: 'Люкс', multiplier: 3.5 }
  };

  useEffect(() => {
    calculatePrice();
  }, [calcData]);

  const calculatePrice = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const dest = destinations[calcData.destination as keyof typeof destinations];
      const hotel = hotelRates[calcData.hotel as keyof typeof hotelRates];
      const duration = parseInt(calcData.duration);
      
      const price = dest.base * hotel.multiplier * duration * calcData.people;
      setTotalPrice(Math.round(price));
      setIsCalculating(false);
    }, 800);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/10 to-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Calculator" className="text-secondary" size={18} />
            <span className="text-sm font-medium">Моментальный расчет</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Travel Calculator</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Рассчитайте стоимость путешествия с точностью до рубля
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <Card className="glass border-2 border-primary/20 glow">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3">Направление</label>
                  <Select value={calcData.destination} onValueChange={(value) => setCalcData({...calcData, destination: value})}>
                    <SelectTrigger className="h-12 bg-white/80">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(destinations).map(([key, dest]) => (
                        <SelectItem key={key} value={key}>{dest.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Продолжительность</label>
                  <Select value={calcData.duration} onValueChange={(value) => setCalcData({...calcData, duration: value})}>
                    <SelectTrigger className="h-12 bg-white/80">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 дня</SelectItem>
                      <SelectItem value="5">5 дней</SelectItem>
                      <SelectItem value="7">7 дней</SelectItem>
                      <SelectItem value="10">10 дней</SelectItem>
                      <SelectItem value="14">14 дней</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Категория отеля</label>
                  <Select value={calcData.hotel} onValueChange={(value) => setCalcData({...calcData, hotel: value})}>
                    <SelectTrigger className="h-12 bg-white/80">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(hotelRates).map(([key, hotel]) => (
                        <SelectItem key={key} value={key}>{hotel.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Количество человек</label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCalcData({...calcData, people: Math.max(1, calcData.people - 1)})}
                      className="h-12 w-12"
                    >
                      <Icon name="Minus" size={18} />
                    </Button>
                    <div className="flex-1 text-center bg-white/80 rounded-lg py-3">
                      <p className="text-2xl font-bold">{calcData.people}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCalcData({...calcData, people: calcData.people + 1})}
                      className="h-12 w-12"
                    >
                      <Icon name="Plus" size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-2 border-secondary/20 glow flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="mb-6 md:mb-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center glow animate-pulse-glow">
                    <Icon name="Plane" className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Общая стоимость</h3>
                  <p className="text-sm text-muted-foreground">для {calcData.people} {calcData.people === 1 ? 'человека' : 'человек'}</p>
                </div>

                <div className="mb-6 md:mb-8">
                  {isCalculating ? (
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Loader2" className="animate-spin text-primary" size={32} />
                      <span className="text-lg">Рассчитываем...</span>
                    </div>
                  ) : (
                    <div className="animate-fade-in">
                      <p className="text-5xl md:text-6xl font-bold text-gradient mb-2">
                        {totalPrice.toLocaleString()} ₽
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ~{Math.round(totalPrice / calcData.people).toLocaleString()} ₽ на человека
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm bg-white/50 px-4 py-2 rounded-lg">
                    <span className="text-muted-foreground">Перелёт</span>
                    <span className="font-semibold">Включено</span>
                  </div>
                  <div className="flex items-center justify-between text-sm bg-white/50 px-4 py-2 rounded-lg">
                    <span className="text-muted-foreground">Проживание</span>
                    <span className="font-semibold">{hotelRates[calcData.hotel as keyof typeof hotelRates].name}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm bg-white/50 px-4 py-2 rounded-lg">
                    <span className="text-muted-foreground">Страховка</span>
                    <span className="font-semibold">Включено</span>
                  </div>
                </div>

                <Button className="w-full mt-6 md:mt-8 glow-hover text-base md:text-lg py-5 md:py-6">
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
