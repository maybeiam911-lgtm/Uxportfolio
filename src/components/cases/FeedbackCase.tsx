import React, { useState } from 'react';
import { MobileFlow } from '../MobileFlow';
import { Lightbulb, ShieldAlert, HeartHandshake, GitMerge, MessageCircle, ArrowLeft, PenTool, Type } from 'lucide-react';

const StepInfo = ({ active, title, description, icon: Icon }: any) => (
  <div className={`transition-all duration-500 border-l-4 pl-6 py-2 ${
    active ? 'border-indigo-600 opacity-100 translate-x-0' : 'border-slate-200 opacity-40 translate-x-4'
  }`}>
    <div className="flex items-center gap-3 mb-2">
      <div className={`p-2 rounded-lg ${active ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-400'}`}>
        <Icon size={20} />
      </div>
      <h3 className={`text-lg font-bold ${active ? 'text-slate-900' : 'text-slate-400'}`}>{title}</h3>
    </div>
    <p className={`leading-relaxed text-sm ${active ? 'text-slate-600' : 'text-slate-400 hidden lg:block'}`}>
      {description}
    </p>
  </div>
);

export function FeedbackCase({ onBack }: { onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState('rating');

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans text-slate-900 animate-in fade-in duration-500">
      
      {/* Navbar specific to case */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
           <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
             <ArrowLeft size={20} />
             <span className="font-medium">Назад в портфолио</span>
           </button>
           <div className="text-sm font-medium text-slate-500 hidden sm:block">
             Кейс: Сценарий обратной связи
           </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <PenTool size={14} />
                UX Writing & Scenarios
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Защита репутации <br/>
                <span className="text-indigo-600">через текст</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Как UX-редактор, я предложил и спроектировал сценарий «перехвата негатива». Мы заменили стандартные системные алерты на заботливый диалог, который удерживает пользователей внутри продукта.
              </p>
            </div>

            <div className="space-y-8">
              <StepInfo 
                active={currentStep === 'rating'}
                title="1. Правильный момент и тон"
                description="Мы не требуем «Оцените нас!», а мягко спрашиваем «Как вам приложение?» именно в момент успеха пользователя (прием лекарства)."
                icon={Lightbulb}
              />
              <StepInfo 
                active={currentStep === 'negative'}
                title="2. Работа с негативом"
                description="Если оценка низкая, мы меняем копирайтинг. Вместо «Ошибка» или «Жаль» — конструктивное «Расскажите, что не так?». Мы показываем, что нам не всё равно."
                icon={ShieldAlert}
              />
              <StepInfo 
                active={currentStep === 'form'}
                title="3. Структура вместо хаоса"
                description="Тексты на тегах («Баги», «Дизайн») помогают пользователю быстро сформулировать мысль, не набирая длинный текст."
                icon={MessageCircle}
              />
              <StepInfo 
                active={currentStep === 'success'}
                title="4. Мотивация на успех"
                description="Для довольных пользователей (4-5 звезд) я написал призыв, который объясняет ЗАЧЕМ ставить оценку: «Чтобы помочь другим сделать выбор»."
                icon={HeartHandshake}
              />
            </div>
            
            {/* Writing Impact Block */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                    <Type size={18} className="text-indigo-600"/>
                    Влияние текста на метрики
                </h4>
                <div className="text-sm text-slate-600 space-y-3">
                    <p>
                        <span className="font-bold text-slate-800">Было:</span> Сухое «Оцените приложение» вызывало раздражение и закрытие окна в 60% случаев.
                    </p>
                    <p>
                        <span className="font-bold text-slate-800">Стало:</span> Дружелюбный tone-of-voice и объяснение ценности («помочь другим») увеличили конверсию в оценку на 15%.
                    </p>
                </div>
            </div>

          </div>

          {/* Right Column: Simulator */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative sticky top-24">
               <div className="w-[375px] h-[812px] bg-slate-900 rounded-[60px] p-4 shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25)] border-[8px] border-slate-800 relative ring-1 ring-white/20">
                  <div className="absolute top-32 -left-4 w-2 h-24 bg-slate-800 rounded-l-lg border-l border-slate-700" />
                  <div className="absolute top-24 -right-4 w-2 h-16 bg-slate-800 rounded-r-lg border-r border-slate-700" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50" />

                  <div className="w-full h-full bg-white rounded-[44px] overflow-hidden relative">
                    <MobileFlow onStepChange={setCurrentStep} />
                  </div>
               </div>
               <div className="absolute -bottom-12 left-0 right-0 text-center text-sm text-slate-400 animate-bounce">
                  👇 Поставьте оценку, чтобы увидеть разные сценарии
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
