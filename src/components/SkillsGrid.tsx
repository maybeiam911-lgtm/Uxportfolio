import React from 'react';
import { Book, FileText, Heart, ListChecks, Layers, Mic, Users, ArrowRight } from 'lucide-react';

const SkillCard = ({ title, sub, desc, metric, icon: Icon, visual }: any) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
        <Icon size={20} />
      </div>
      {metric && (
        <div className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wide rounded-md">
          {metric}
        </div>
      )}
    </div>
    
    <h3 className="font-bold text-slate-900 text-lg mb-1">{title}</h3>
    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{sub}</div>
    
    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
      {desc}
    </p>

    {/* Abstract Visualization Area */}
    <div className="h-32 bg-slate-50 rounded-xl border border-slate-100 overflow-hidden relative group">
       {visual}
    </div>
  </div>
);

// --- VISUALIZATIONS ---

const RedPolicyVis = () => (
  <div className="p-4 space-y-2 opacity-80">
    <div className="flex items-center gap-2">
       <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[8px]">✓</div>
       <div className="h-2 w-24 bg-slate-200 rounded-full" />
    </div>
    <div className="flex items-center gap-2">
       <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[8px]">✓</div>
       <div className="h-2 w-32 bg-slate-200 rounded-full" />
    </div>
     <div className="flex items-center gap-2">
       <div className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[8px]">✕</div>
       <div className="h-2 w-20 bg-slate-200 rounded-full" />
    </div>
    <div className="absolute bottom-2 right-2 text-[10px] font-bold text-indigo-600 bg-white px-2 py-1 rounded shadow-sm">
        Score: 4.8
    </div>
  </div>
);

const GlossaryVis = () => (
    <div className="flex items-center justify-center h-full gap-2 px-2">
        <div className="bg-red-50 text-red-400 px-2 py-1 rounded text-[10px] line-through decoration-red-400">
            Уровень астмы
        </div>
        <ArrowRight size={12} className="text-slate-300"/>
        <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-[10px] font-bold border border-emerald-100">
            Астма-контроль
        </div>
    </div>
);

const ToVVis = () => (
    <div className="p-3 pt-4">
        <div className="bg-white p-3 rounded-tl-xl rounded-tr-xl rounded-br-xl shadow-sm border border-slate-100 text-[10px] leading-snug mb-2 relative">
            Как вы дышали сегодня? 🌬️
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-indigo-600 text-white rounded-full flex items-center justify-center text-[8px]">♥</div>
        </div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
             <div className="w-[70%] bg-indigo-500 h-full" />
        </div>
        <div className="flex justify-between mt-1 text-[8px] text-slate-400">
            <span>Open Rate</span>
            <span className="text-indigo-600 font-bold">+20%</span>
        </div>
    </div>
);

const GuideVis = () => (
    <div className="relative h-full w-full bg-white p-3">
        <div className="w-full h-2 bg-slate-100 mb-2 rounded-full" />
        <div className="w-2/3 h-2 bg-slate-100 mb-4 rounded-full" />
        
        <div className="grid grid-cols-2 gap-2">
            <div className="h-12 border border-dashed border-slate-200 rounded bg-slate-50 flex items-center justify-center text-[8px] text-slate-400">
                Структура
            </div>
            <div className="h-12 border border-dashed border-slate-200 rounded bg-slate-50 flex items-center justify-center text-[8px] text-slate-400">
                Источники
            </div>
        </div>
    </div>
);

const LayoutVis = () => (
    <div className="p-3 space-y-2">
        <div className="h-2 w-full bg-slate-100 rounded-full" />
        <div className="h-2 w-full bg-slate-100 rounded-full" />
        <div className="bg-indigo-50 p-2 rounded border-l-2 border-indigo-400">
            <div className="h-1.5 w-3/4 bg-indigo-200 rounded-full mb-1" />
            <div className="h-1.5 w-1/2 bg-indigo-200 rounded-full" />
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full" />
    </div>
);

const PodcastVis = () => (
    <div className="h-full flex items-center justify-center gap-1 bg-slate-900/5">
        {[4, 8, 3, 9, 5, 8, 4, 2].map((h, i) => (
             <div key={i} className="w-1.5 bg-slate-800 rounded-full" style={{ height: `${h * 10}%`, opacity: 0.3 + (i/10) }} />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-1.5 rounded-full shadow-sm">
                <Mic size={12} className="text-indigo-600" />
            </div>
        </div>
    </div>
);

const HiringVis = () => (
    <div className="h-full flex items-center justify-center">
        <div className="flex -space-x-2">
            {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] text-slate-500 font-bold">
                    User
                </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold">
                +20
            </div>
        </div>
    </div>
);

// --- MAIN GRID ---

export const SkillsGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
       <SkillCard 
          title="Редполитика"
          sub="Разработка и контроль"
          desc="Создал критерии качества и инструкции для 50+ авторов-врачей. Единый стандарт качества контента."
          metric="Оценка 4.8/5"
          icon={Book}
          visual={<RedPolicyVis />}
       />
       <SkillCard 
          title="Глоссарий"
          sub="200+ терминов"
          desc="Унифицировал термины («астма-контроль» вместо «уровень»). Меньше путаницы в команде и продукте."
          metric="+Читабельность"
          icon={FileText}
          visual={<GlossaryVis />}
       />
       <SkillCard 
          title="Tone of Voice"
          sub="Empathetic + Actionable"
          desc="Внедрил эмпатию: «Как вы дышали?» вместо «Введите FEV1». Используем в пушах и статьях."
          metric="Open Rate +20%"
          icon={Heart}
          visual={<ToVVis />}
       />
       <SkillCard 
          title="Инструкции"
          sub="Для авторов"
          desc="Гайды по структуре, языку и ссылкам. Время на ревью сократилось на 30%, качество выросло."
          metric="-30% время ревью"
          icon={ListChecks}
          visual={<GuideVis />}
       />
       <SkillCard 
          title="Верстка статей"
          sub="Интерактив"
          desc="Внедрил кликабельные подсказки и цветовые выделения. Материалы стало интереснее читать."
          metric="Время +25%"
          icon={Layers}
          visual={<LayoutVis />}
       />
       <SkillCard 
          title="Подкасты"
          sub="Ведущий + Эксперты"
          desc="Записал 10+ эпизодов с врачами. Планирование тем, интервью и продакшн."
          metric="50k прослушиваний"
          icon={Mic}
          visual={<PodcastVis />}
       />
        <SkillCard 
          title="Редактура и найм"
          sub="Масштабирование"
          desc="Нанял 20+ авторов, отредактировал 500+ материалов. Команда выросла на 30%."
          metric="Качество +20%"
          icon={Users}
          visual={<HiringVis />}
       />
    </div>
  );
};
