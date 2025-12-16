import React from 'react';
import AfterView from '../../imports/Настройка';
import { BeforeView } from '../BeforeView';
import { ArrowRight, Heart, ShieldCheck, ArrowLeft, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'До', value: 20 },
  { name: 'После', value: 80 },
];

const ImpactCard = () => (
  <div className="w-[300px] bg-white rounded-[30px] p-6 shadow-xl border border-slate-100 flex flex-col h-[400px]">
      <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
             <TrendingUp size={20} />
          </div>
          <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Impact</div>
              <div className="font-bold text-slate-900">Результаты</div>
          </div>
      </div>

      <div className="space-y-4 mb-8">
          <div>
              <div className="text-3xl font-bold text-slate-900">x4</div>
              <div className="text-sm text-slate-500 leading-snug">
                  Рост Adherence (приверженности лечению)
              </div>
          </div>
          <div>
              <div className="text-3xl font-bold text-slate-900">1 шаг</div>
              <div className="text-sm text-slate-500 leading-snug">
                  Вместо 6–8 шагов добавления лекарства
              </div>
          </div>
      </div>

      <div className="h-40 w-full -ml-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4, fill: '#4f46e5' }} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} dy={10} />
            </LineChart>
          </ResponsiveContainer>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-100 text-[10px] text-slate-400 text-center">
          По данным аналитики 2024
      </div>
  </div>
);

const DeviceFrame = ({ children, title, label, type = "neutral" }: any) => (
  <div className="flex flex-col items-center gap-6 group">
    <div className="flex flex-col items-center gap-2">
      <div className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${
        type === 'accent' 
          ? 'bg-indigo-100 text-indigo-700' 
          : 'bg-slate-100 text-slate-600'
      }`}>
        {label}
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
    </div>
    
    <div className={`
      relative w-[375px] h-[812px] bg-white rounded-[50px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] border-[8px] overflow-hidden transition-transform duration-500 hover:-translate-y-2
      ${type === 'accent' ? 'border-slate-900 shadow-indigo-900/20' : 'border-slate-300 shadow-slate-400/20'}
    `}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[150px] bg-black rounded-b-[20px] z-50" />
      <div className="w-full h-full overflow-hidden bg-white relative">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 z-50 rounded-[40px]" />
    </div>
  </div>
);

export function PillTrackerCase({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-indigo-100 selection:text-indigo-900 animate-in fade-in duration-500">
      
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
             <ArrowLeft size={20} />
             <span className="font-medium">Назад в портфолио</span>
          </button>
          <div className="text-sm font-medium text-slate-500 hidden sm:block">
            Кейс: UX Редактура
          </div>
        </div>
      </nav>

      <main className="max-w-[1920px] mx-auto px-6 py-12 md:py-20 overflow-x-hidden">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <Heart size={16} className="fill-indigo-700" />
            <span>HealthTech Редактура</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Когда слова — это тоже <br/>
            <span className="text-indigo-600">часть терапии</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            Как превратить сложную настройку расписания приема лекарств в простой и заботливый интерфейс, который не вызывает тревоги.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center gap-6 relative">
          
            {/* Group: Problems + Before Device */}
            <div className="flex flex-col-reverse 2xl:flex-row items-center 2xl:items-start gap-6 shrink-0">
                {/* Problems Card */}
                <div className="w-64 2xl:mt-32 shrink-0">
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-red-100 text-sm text-slate-600 relative">
                        <div className="font-bold text-red-600 mb-2 flex items-center gap-2">
                        <ShieldCheck size={14} /> 
                        Проблемы
                        </div>
                        <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-500 leading-relaxed">
                            <li>Терминология базы данных («Инициализировать слот»)</li>
                            <li>Холодный, отстраненный тон («Алерты», «Терминация»)</li>
                            <li>Визуальный шум и лишние детали</li>
                        </ul>
                        {/* Pointer for large screens (pointing right) */}
                        <div className="hidden 2xl:block absolute top-6 -right-1.5 w-3 h-3 bg-white border-t border-r border-red-100 rotate-45" />
                        {/* Pointer for small screens (pointing up) */}
                        <div className="block 2xl:hidden absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-red-100 rotate-45" />
                    </div>
                </div>

                <div className="relative z-10 shrink-0">
                    <DeviceFrame title="Техническое ТЗ" label="До" type="neutral">
                    <BeforeView />
                    </DeviceFrame>
                </div>
            </div>

            {/* Arrow Before -> After */}
            <div className="hidden xl:flex text-slate-200 shrink-0 mx-4">
                <ArrowRight size={64} strokeWidth={1} />
            </div>

            <div className="relative z-10 shrink-0">
                <DeviceFrame title="Финальный дизайн" label="После" type="accent">
                    <div className="w-full h-full bg-white relative overflow-hidden">
                        <AfterView />
                    </div>
                </DeviceFrame>
            </div>

             {/* Arrow After -> Impact */}
            <div className="hidden xl:flex text-slate-200 shrink-0 mx-4">
                 <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md max-w-[120px] text-center">
                        Эмпатичный копи: «Забыли? Отметим сейчас»
                    </span>
                    <ArrowRight size={48} strokeWidth={1} className="text-indigo-200"/>
                 </div>
            </div>

            {/* Impact Card */}
            <div className="relative z-10 shrink-0 xl:self-center mt-8 xl:mt-0">
                <ImpactCard />
            </div>

        </div>
      </main>
    </div>
  );
}
