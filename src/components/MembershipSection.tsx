import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function MembershipSection() {
  const tiers = [
    {
      name: 'Silver',
      icon: 'Award',
      price: 'Бесплатно',
      gradient: 'from-slate-400 to-slate-500',
      benefits: ['Скидка 5%', 'Базовая поддержка', 'Email-уведомления']
    },
    {
      name: 'Gold',
      icon: 'Medal',
      price: '5 000 ₽/год',
      gradient: 'from-yellow-400 to-yellow-600',
      benefits: ['Скидка 10%', 'Приоритетная поддержка', 'Ранний доступ', 'Бонусные мили'],
      popular: true
    },
    {
      name: 'Platinum',
      icon: 'Crown',
      price: '15 000 ₽/год',
      gradient: 'from-purple-400 to-purple-600',
      benefits: ['Скидка 20%', 'VIP-поддержка 24/7', 'Эксклюзивные туры', 'Upgrade класса', 'Lounge доступ']
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-4 backdrop-blur-sm border border-yellow-500/30">
            <Icon name="Crown" className="text-yellow-400" size={18} />
            <span className="text-sm font-medium">Клубная программа</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">AeroTravel Membership</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Станьте частью премиум-сообщества путешественников
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <Card
              key={idx}
              className={`relative overflow-hidden border-2 ${tier.popular ? 'border-yellow-500/50 scale-105' : 'border-white/20'} bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 glow-hover`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold text-center py-2">
                  ПОПУЛЯРНЫЙ ВЫБОР
                </div>
              )}
              <CardContent className={`p-6 md:p-8 ${tier.popular ? 'pt-12 md:pt-14' : ''}`}>
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 bg-gradient-to-br ${tier.gradient} rounded-3xl flex items-center justify-center glow`}>
                  <Icon name={tier.icon as any} className="text-white" size={32} />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">{tier.name}</h3>
                <p className="text-center text-xl md:text-2xl font-bold text-primary mb-6">{tier.price}</p>

                <div className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${tier.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Icon name="Check" className="text-white" size={12} />
                      </div>
                      <span className="text-sm md:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full glow-hover ${tier.popular ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600' : ''}`}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  {tier.price === 'Бесплатно' ? 'Присоединиться' : 'Вступить в клуб'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
