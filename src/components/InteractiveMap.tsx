import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Country {
  name: string;
  x: number;
  y: number;
  tours: { title: string; price: string; duration: string }[];
}

export default function InteractiveMap() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const countries: Country[] = [
    {
      name: '🇯🇵 Япония',
      x: 75,
      y: 35,
      tours: [
        { title: 'Токио + Киото', price: '89 000 ₽', duration: '7 дней' },
        { title: 'Цветение сакуры', price: '120 000 ₽', duration: '10 дней' }
      ]
    },
    {
      name: '🇫🇷 Франция',
      x: 48,
      y: 30,
      tours: [
        { title: 'Париж романтик', price: '95 000 ₽', duration: '5 дней' },
        { title: 'Прованс + Лазурный берег', price: '130 000 ₽', duration: '8 дней' }
      ]
    },
    {
      name: '🇦🇪 ОАЭ',
      x: 58,
      y: 42,
      tours: [
        { title: 'Дубай премиум', price: '75 000 ₽', duration: '5 дней' },
        { title: 'Абу-Даби + Дубай', price: '110 000 ₽', duration: '7 дней' }
      ]
    },
    {
      name: '🇺🇸 США',
      x: 20,
      y: 35,
      tours: [
        { title: 'Нью-Йорк экспресс', price: '120 000 ₽', duration: '6 дней' },
        { title: 'Западное побережье', price: '180 000 ₽', duration: '12 дней' }
      ]
    },
    {
      name: '🇲🇻 Мальдивы',
      x: 65,
      y: 55,
      tours: [
        { title: 'Райский отдых', price: '150 000 ₽', duration: '7 дней' },
        { title: 'Luxury spa resort', price: '250 000 ₽', duration: '10 дней' }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Интерактивная карта направлений</h2>
          <p className="text-slate-300 text-lg">Выберите страну и откройте мир возможностей</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="glass border-2 border-primary/30 glow overflow-hidden bg-slate-900/50">
            <CardContent className="p-4 md:p-8">
              <div className="relative w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-primary/20">
                <img 
                  src="https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/e1ae0f9c-ae71-472b-9bd2-480a3998ea59.jpg"
                  alt="World Map"
                  className="w-full h-full object-cover opacity-40"
                />
                
                <div className="absolute inset-0">
                  {countries.map((country, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCountry(country)}
                      className="absolute group cursor-pointer"
                      style={{ left: `${country.x}%`, top: `${country.y}%`, transform: 'translate(-50%, -50%)' }}
                    >
                      <div className="relative">
                        <div className="w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse-glow glow group-hover:scale-150 transition-all"></div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 px-3 py-1 rounded-lg text-xs md:text-sm border border-primary/30 text-white">
                          {country.name}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {selectedCountry && (
                <div className="mt-6 md:mt-8 animate-fade-in">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-2xl md:text-3xl font-bold">{selectedCountry.name}</h3>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedCountry(null)}
                      className="text-white border-white/30 hover:bg-white/10"
                    >
                      <Icon name="X" size={16} />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCountry.tours.map((tour, idx) => (
                      <Card key={idx} className="bg-slate-800/50 border-primary/20 hover:border-primary/50 transition-all glow-hover">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-bold text-lg md:text-xl mb-1">{tour.title}</h4>
                              <p className="text-slate-400 text-sm">{tour.duration}</p>
                            </div>
                            <Icon name="MapPin" className="text-primary" size={20} />
                          </div>
                          <div className="flex items-end justify-between">
                            <div>
                              <p className="text-xs text-slate-400">от</p>
                              <p className="text-xl md:text-2xl font-bold text-primary">{tour.price}</p>
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
      </div>
    </section>
  );
}