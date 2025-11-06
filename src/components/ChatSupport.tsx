import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Привет! Я AeroBot 🤖 Чем могу помочь?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    '💰 Цены на туры',
    '📅 Даты вылетов',
    '✈️ Популярные направления',
    '📞 Связаться с менеджером'
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    setMessages([...messages, { type: 'user', text: inputValue }]);
    setInputValue('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Спасибо за вопрос! Наш менеджер свяжется с вами в ближайшее время.' 
      }]);
    }, 1000);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full glow shadow-2xl p-0 bg-gradient-to-br from-primary to-secondary hover:scale-110 transition-all"
      >
        {isOpen ? (
          <Icon name="X" className="text-white" size={24} />
        ) : (
          <Icon name="MessageCircle" className="text-white" size={24} />
        )}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 md:bottom-28 right-6 z-50 w-[calc(100vw-3rem)] md:w-96 glass border-2 border-primary/30 glow animate-fade-in shadow-2xl">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-primary to-secondary p-4 md:p-5 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Icon name="Headphones" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg">AeroTravel Connect</h3>
                    <p className="text-xs opacity-90">Онлайн • Обычно отвечает за минуту</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 md:h-80 overflow-y-auto p-4 space-y-3 bg-white/50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  <div
                    className={`max-w-[80%] md:max-w-[75%] px-3 md:px-4 py-2 md:py-3 rounded-2xl text-sm ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-primary to-secondary text-white'
                        : 'bg-white border-2 border-border/50'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 md:p-4 border-t border-border/50 bg-white/80">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setMessages([...messages, { type: 'user', text: reply }]);
                      setTimeout(() => {
                        setMessages(prev => [...prev, { 
                          type: 'bot', 
                          text: 'Отлично! Сейчас подберу информацию...' 
                        }]);
                      }, 800);
                    }}
                    className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Напишите сообщение..."
                  className="flex-1 bg-white/80"
                />
                <Button onClick={handleSend} size="icon" className="glow-hover flex-shrink-0">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
