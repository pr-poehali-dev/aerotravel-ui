import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function VRPreview() {
  const vrDestinations = [
    {
      name: 'Мальдивы',
      subtitle: 'Райские пляжи в 360°',
      image: 'https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/cf2f5c04-8e59-4a1d-bb1c-be937bfa9001.jpg',
      duration: '3:45'
    },
    {
      name: 'Токио',
      subtitle: 'Ночной мегаполис',
      image: 'https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/4f49c3fb-6c93-4334-8ebd-e474265bd807.jpg',
      duration: '4:20'
    },
    {
      name: 'Париж',
      subtitle: 'Эйфелева башня',
      image: 'https://cdn.poehali.dev/projects/69510c59-46aa-4a63-9a98-568a93fcf98d/files/a6d98781-7a93-4cd2-afcc-b617914af7ad.jpg',
      duration: '2:50'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-2 rounded-full mb-4 backdrop-blur-sm border border-primary/30">
            <Icon name="Video" className="text-primary" size={18} />
            <span className="text-sm font-medium">Виртуальная реальность</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">VR-Превью направлений</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Побывайте в любой точке мира прямо сейчас с помощью виртуальных туров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {vrDestinations.map((dest, idx) => (
            <Card 
              key={idx}
              className="group relative overflow-hidden border-2 border-primary/30 bg-slate-800/50 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 glow-hover cursor-pointer"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center glow backdrop-blur-sm">
                    <Icon name="Play" className="text-primary ml-1" size={32} />
                  </div>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm border border-white/20">
                  <Icon name="Clock" size={12} />
                  {dest.duration}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">{dest.name}</h3>
                  <p className="text-sm text-slate-300 mb-4">{dest.subtitle}</p>
                  <Button className="w-full glow-hover bg-white/10 border border-white/30 hover:bg-white/20 backdrop-blur-sm">
                    <Icon name="Glasses" className="mr-2" size={18} />
                    Посмотреть в 360°
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="glow-hover border-white/30 text-white hover:bg-white/10">
            <Icon name="Eye" className="mr-2" size={18} />
            Все VR-туры
          </Button>
        </div>
      </div>
    </section>
  );
}