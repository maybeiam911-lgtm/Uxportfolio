import React from 'react';
import { ChatBotSimulator } from '../ChatBotSimulator';
import { MessageCircle, Zap, LayoutList, ArrowLeft, Bot, Sparkles, TrendingUp } from 'lucide-react';

const CaseFeature = ({ title, description, icon: Icon }: any) => (
  <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all">
    <div className="bg-indigo-50 text-indigo-600 p-2.5 rounded-lg shrink-0">
        <Icon size={20} />
    </div>
    <div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

export function ChatBotCase({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#F8F9FB] font-sans text-slate-900 animate-in fade-in duration-500">
      
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
           <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
             <ArrowLeft size={20} />
             <span className="font-medium">Назад в портфолио</span>
           </button>
           <div className="text-sm font-medium text-slate-500 hidden sm:block">
             Кейс: Onboarding Chatbot
           </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Bot size={14} />
                Conversational Design
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Знакомство с <br/>
                <span className="text-indigo-600">супер-аппом</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Приложение содержит множество медицинских сервисов: от дневника симптомов до подкастов. 
                Моя задача — познакомить пользователя с ними через легкий диалог, не перегрузив его информацией.
              </p>
            </div>

            <div className="space-y-2">
               {/* Metrics Block */}
               <div className="bg-white p-5 rounded-xl border border-indigo-100 shadow-sm mb-6">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3 text-sm uppercase tracking-wide">
                      <TrendingUp size={16} className="text-indigo-600"/>
                      Влияние на метрики
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                      <div>
                          <div className="text-2xl font-bold text-indigo-600">+30%</div>
                          <div className="text-xs text-slate-500 leading-tight mt-1">
                              Вовлеченность в онбординг (по фидбеку)
                          </div>
                      </div>
                      <div>
                          <div className="text-2xl font-bold text-indigo-600">4.8</div>
                          <div className="text-xs text-slate-500 leading-tight mt-1">
                              Средняя оценка онбординга
                          </div>
                      </div>
                  </div>
               </div>

               <h3 className="text-lg font-bold text-slate-900 px-4">Мои решения</h3>
               
               <CaseFeature 
                 title="Дозированная подача (Chunking)"
                 description="Вместо одной длинной инструкции мы даем информацию порциями. Пользователь сам регулирует скорость знакомства кнопками «Начнем» и «Дальше»."
                 icon={LayoutList}
               />

               <CaseFeature 
                 title="Право на отказ"
                 description="Мы не заставляем настраивать всё сразу. Кнопка «В другой раз» дает пользователю контроль и снижает давление."
                 icon={Zap}
               />

               <CaseFeature 
                 title="Эмпатия робота"
                 description="Ева сразу обозначает, что она — робот, но использует теплые формулировки («буду скучать», «заботиться о вас приятно»), чтобы создать доверие."
                 icon={Sparkles}
               />
            </div>
          </div>

          {/* Right Column: Simulator */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative sticky top-24">
               {/* Device Frame */}
               <div className="w-[375px] h-[812px] bg-slate-900 rounded-[60px] p-4 shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25)] border-[8px] border-slate-800 relative ring-1 ring-white/20">
                  {/* Hardware buttons */}
                  <div className="absolute top-32 -left-4 w-2 h-24 bg-slate-800 rounded-l-lg border-l border-slate-700" />
                  <div className="absolute top-24 -right-4 w-2 h-16 bg-slate-800 rounded-r-lg border-r border-slate-700" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50" />

                  {/* Screen Content */}
                  <div className="w-full h-full bg-white rounded-[44px] overflow-hidden relative">
                    <ChatBotSimulator />
                  </div>
               </div>
               
               <div className="absolute -bottom-12 left-0 right-0 text-center text-sm text-slate-400 animate-bounce">
                  👇 Нажмите «Начнем», чтобы поговорить с Евой
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
