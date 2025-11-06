import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function PartnersSection() {
  const partners = [
    { name: 'Emirates', icon: 'Plane' },
    { name: 'Qatar Airways', icon: 'Plane' },
    { name: 'Lufthansa', icon: 'Plane' },
    { name: 'Singapore Airlines', icon: 'Plane' },
    { name: 'ANA', icon: 'Plane' },
    { name: 'Turkish Airlines', icon: 'Plane' }
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Наши партнёры</h2>
          <p className="text-muted-foreground text-base md:text-lg">Работаем с ведущими авиакомпаниями мира</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {partners.map((partner, idx) => (
            <Card 
              key={idx}
              className="group p-6 md:p-8 flex flex-col items-center justify-center border-2 border-border/50 hover:border-primary/50 transition-all duration-300 glow-hover cursor-pointer bg-white/80"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Icon name={partner.icon as any} className="text-primary" size={24} />
              </div>
              <p className="text-xs md:text-sm font-semibold text-center">{partner.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
