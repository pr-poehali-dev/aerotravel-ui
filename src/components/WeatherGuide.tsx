import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function WeatherGuide() {
  const weatherData = [
    { city: 'Токио', temp: '+8°C', condition: 'Солнечно', icon: 'Sun', color: 'text-yellow-500', season: 'Зима' },
    { city: 'Париж', temp: '+5°C', condition: 'Облачно', icon: 'Cloud', color: 'text-slate-400', season: 'Зима' },
    { city: 'Дубай', temp: '+24°C', condition: 'Ясно', icon: 'Sun', color: 'text-orange-500', season: 'Комфорт' },
    { city: 'Мальдивы', temp: '+30°C', condition: 'Жарко', icon: 'Sun', color: 'text-red-500', season: 'Лето' },
    { city: 'Нью-Йорк', temp: '+2°C', condition: 'Снег', icon: 'Snowflake', color: 'text-blue-400', season: 'Зима' },
    { city: 'Сингапур', temp: '+28°C', condition: 'Дождь', icon: 'CloudRain', color: 'text-blue-500', season: 'Тропики' }
  ];

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-4 py-2 rounded-full mb-4">
            <Icon name="CloudSun" className="text-blue-500" size={18} />
            <span className="text-sm font-medium">Прогноз</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Погода и сезоны</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Актуальная информация о погоде в популярных направлениях
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto">
          {weatherData.map((weather, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 glow-hover cursor-pointer"
            >
              <CardContent className="p-4 md:p-6">
                <div className="text-center">
                  <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon name={weather.icon as any} className={weather.color} size={28} />
                  </div>
                  
                  <h3 className="font-bold text-base md:text-lg mb-1">{weather.city}</h3>
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-2">{weather.temp}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">{weather.condition}</p>
                  
                  <div className="pt-3 border-t border-border/50">
                    <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      <Icon name="Calendar" size={10} />
                      {weather.season}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            <Icon name="RefreshCw" className="inline mr-1" size={14} />
            Обновлено сегодня в 14:30
          </p>
        </div>
      </div>
    </section>
  );
}
