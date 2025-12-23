import React, { useState } from 'react';
import { ArrowLeft, FileText, Sparkles, AlertTriangle, Wine, Sun, CheckCircle2, ScanLine, ArrowRightLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components for the Case ---

const StepInfo = ({ active, title, description, icon: Icon }: any) => (
  <div className={`transition-all duration-500 border-l-4 pl-6 py-2 ${
    active ? 'border-teal-500 opacity-100 translate-x-0' : 'border-slate-200 opacity-40 translate-x-4'
  }`}>
    <div className="flex items-center gap-3 mb-2">
      <div className={`p-2 rounded-lg ${active ? 'bg-teal-50 text-teal-700' : 'bg-slate-100 text-slate-400'}`}>
        <Icon size={20} />
      </div>
      <h3 className={`text-lg font-bold ${active ? 'text-slate-900' : 'text-slate-400'}`}>{title}</h3>
    </div>
    <p className={`leading-relaxed text-sm ${active ? 'text-slate-600' : 'text-slate-400 hidden lg:block'}`}>
      {description}
    </p>
  </div>
);

// --- The Mobile Simulator Content ---

const MedicalInstructionView = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="h-full bg-[#fdfbf7] p-6 overflow-hidden relative"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10">
        <FileText size={120} />
    </div>
    <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">ИНСТРУКЦИЯ ПО МЕДИЦИНСКОМУ ПРИМЕНЕНИЮ</h3>
    
    <div className="space-y-4 font-serif text-[10px] leading-tight text-slate-600 columns-2 gap-4 text-justify">
        <p>
            <span className="font-bold">Фармакокинетика:</span> Абсорбция высокая. Cmax в плазме крови достигается через 1–2 ч. Связь с белками плазмы — 99%. Метаболизируется в печени посредством изофермента CYP2C9.
        </p>
        <p>
            <span className="font-bold bg-yellow-100/50">Взаимодействие:</span> Одновременное применение с этанолом может потенцировать угнетающее влияние на ЦНС, а также повышать риск эрозивно-язвенных поражений ЖКТ.
        </p>
        <p>
            <span className="font-bold">Фотосенсибилизация:</span> В период лечения необходимо воздерживаться от посещения солярия и длительного пребывания на солнце во избежание реакций фототоксичности.
        </p>
        <p>
            <span className="font-bold">Особые указания:</span> С осторожностью применять при вождении автотранспорта и занятии другими потенциально опасными видами деятельности, требующими повышенной концентрации внимания.
        </p>
        <p>
           Текст продолжается и продолжается, создавая у пациента ощущение тревоги и непонимания. Мелкий шрифт затрудняет восприятие важной информации.
        </p>
    </div>

    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fdfbf7] to-transparent flex items-end justify-center pb-8">
        <div className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-bold border border-red-100 flex items-center gap-2">
            <AlertTriangle size={14} />
            Слишком сложно для восприятия
        </div>
    </div>
  </motion.div>
);

const AppView = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="h-full bg-slate-50 relative flex flex-col"
  >
     {/* App Header */}
     <div className="bg-white p-4 pt-12 pb-4 shadow-sm z-10">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                N
            </div>
            <div>
                <h3 className="font-bold text-slate-900">Нурофен Экспресс</h3>
                <p className="text-xs text-slate-500">Капсулы, 400 мг</p>
            </div>
        </div>
     </div>

     <div className="p-4 space-y-4 overflow-y-auto">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">На что обратить внимание</div>
        
        {/* Card 1 */}
        <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4"
        >
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                <Wine size={24} />
            </div>
            <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Несовместим с алкоголем</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                    Может навредить желудку. Лучше воздержаться от спиртного во время курса.
                </p>
            </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4"
        >
            <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl">
                <Sun size={24} />
            </div>
            <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Берегитесь солнца</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                    Кожа становится чувствительнее. Используйте крем SPF 50 или носите закрытую одежду.
                </p>
            </div>
        </motion.div>

         {/* Card 3 */}
         <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4"
        >
            <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                <CheckCircle2 size={24} />
            </div>
            <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Можно за руль</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                    Препарат не влияет на внимание, если соблюдать дозировку.
                </p>
            </div>
        </motion.div>
     </div>
  </motion.div>
);

// --- Main Component ---

export function SimpleComplexCase({ onBack }: { onBack: () => void }) {
  const [mode, setMode] = useState<'doc' | 'app'>('doc');

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans text-slate-900 animate-in fade-in duration-500">
      
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
           <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
             <ArrowLeft size={20} />
             <span className="font-medium">Назад в портфолио</span>
           </button>
           <div className="text-sm font-medium text-slate-500 hidden sm:block">
             Кейс: Медицинские данные
           </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <ScanLine size={14} />
                Information Architecture
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Сложное <br/>
                <span className="text-teal-600">стало простым</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Инструкции к препаратам пишутся юристами для защиты фармкомпаний, а не для людей. Я перевел «медицинский канцелярит» на человеческий язык, выделив только то, что реально влияет на жизнь пациента.
              </p>
            </div>

            <div className="space-y-8">
              <StepInfo 
                active={mode === 'doc'}
                title="Проблема: Информационный шум"
                description="Пациент видит термины «ингибирование ЦОГ» и «фотосенсибилизация». Это вызывает страх и желание бросить лечение."
                icon={FileText}
              />
              <StepInfo 
                active={mode === 'app'}
                title="Решение: Сценарии жизни"
                description="Я перегруппировал данные вокруг жизненных ситуаций: можно ли выпить вина? можно ли на пляж? можно ли за руль?"
                icon={Sparkles}
              />
            </div>
            
            {/* Metric Block */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mt-8">
                <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                    <ArrowRightLeft size={18} className="text-teal-600"/>
                    Результат
                </h4>
                <div className="text-sm text-slate-600 space-y-3">
                    <p>
                        Сокращение объема текста на <span className="font-bold text-slate-900">70%</span> без потери смысла предупреждений.
                    </p>
                    <p>
                        Снижение обращений в поддержку с вопросами «а можно ли мне...» на <span className="font-bold text-slate-900">25%</span>.
                    </p>
                </div>
            </div>
          </div>

          {/* Right Column: Interactive Simulator */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Toggle Switch */}
            <div className="bg-white p-1 rounded-full shadow-sm border border-slate-200 flex mb-8 relative z-10">
                <button 
                    onClick={() => setMode('doc')}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                        mode === 'doc' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'
                    }`}
                >
                    Инструкция
                </button>
                <button 
                    onClick={() => setMode('app')}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                        mode === 'app' ? 'bg-teal-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'
                    }`}
                >
                    В приложении
                </button>
            </div>

            <div className="relative sticky top-24">
               {/* Phone Frame */}
               <div className="w-[375px] h-[812px] bg-slate-900 rounded-[60px] p-4 shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25)] border-[8px] border-slate-800 relative ring-1 ring-white/20">
                  <div className="absolute top-32 -left-4 w-2 h-24 bg-slate-800 rounded-l-lg border-l border-slate-700" />
                  <div className="absolute top-24 -right-4 w-2 h-16 bg-slate-800 rounded-r-lg border-r border-slate-700" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50" />

                  <div className="w-full h-full bg-white rounded-[44px] overflow-hidden relative">
                    <AnimatePresence mode="wait">
                        {mode === 'doc' ? <MedicalInstructionView key="doc" /> : <AppView key="app" />}
                    </AnimatePresence>
                  </div>
               </div>
               
               {/* Floating Caption */}
               <div className="absolute -bottom-12 left-0 right-0 text-center text-sm text-slate-400">
                  👆 Переключайте режимы сверху
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
