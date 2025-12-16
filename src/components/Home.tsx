import React, { useState, useEffect } from 'react';
import { PenTool, ArrowRight, MessageSquare, Heart, Bot, Type, Layers, Users, Briefcase } from 'lucide-react';
import { MicrocopyGallery } from './MicrocopyGallery';
import { SkillsGrid } from './SkillsGrid';
import { ContactSection } from './ContactSection';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import profilePhoto from 'figma:asset/94fde328b6e37189614bf1e114232d2a0a4314ce.png';

const CaseCard = ({ title, category, description, icon: Icon, onClick, color }: any) => (
  <div 
    onClick={onClick}
    className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col h-full"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110`} />
    
    <div className={`w-12 h-12 bg-${color}-100 text-${color}-600 rounded-2xl flex items-center justify-center mb-6 relative shrink-0`}>
      <Icon size={24} />
    </div>

    <div className="relative flex-1 flex flex-col">
      <div className={`text-xs font-bold text-${color}-600 uppercase tracking-wider mb-2`}>{category}</div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{title}</h3>
      <p className="text-slate-500 leading-relaxed mb-8 flex-1">
        {description}
      </p>
      
      <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-4 transition-all mt-auto">
        Смотреть кейс <ArrowRight size={16} />
      </div>
    </div>
  </div>
);

type Role = 'ux' | 'lead';

export function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  // Initialize state from URL params
  const [role, setRoleState] = useState<Role>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const roleParam = params.get('role');
      return roleParam === 'lead' ? 'lead' : 'ux';
    }
    return 'ux';
  });

  // Function to update state and URL
  const setRole = (newRole: Role) => {
    setRoleState(newRole);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('role', newRole);
      window.history.pushState({}, '', url);
    }
  };

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const roleParam = params.get('role');
      setRoleState(roleParam === 'lead' ? 'lead' : 'ux');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <header className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
         <div className="flex items-center gap-2 font-bold text-slate-900 text-xl">
            <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center shadow-lg shadow-slate-200">
              <PenTool size={20} />
            </div>
            Саша Абрамов
         </div>
         
         {/* Role Switcher */}
         <div className="hidden md:flex bg-slate-100 p-1 rounded-full border border-slate-200">
            <button 
                onClick={() => setRole('ux')}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                    role === 'ux' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
            >
                UX-редактор
            </button>
            <button 
                onClick={() => setRole('lead')}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                    role === 'lead' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
            >
                Шеф-редактор
            </button>
         </div>

         <button 
            onClick={() => window.print()}
            className="bg-white border border-slate-200 text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-50 transition-colors active:scale-95 hidden md:block"
         >
            Скачать резюме
         </button>
      </header>

      {/* Mobile Role Switcher (Visible only on small screens) */}
      <div className="md:hidden px-6 pb-4">
         <div className="flex w-full bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button 
                onClick={() => setRole('ux')}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                    role === 'ux' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                }`}
            >
                UX-редактор
            </button>
            <button 
                onClick={() => setRole('lead')}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                    role === 'lead' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'
                }`}
            >
                Шеф-редактор
            </button>
         </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20 space-y-32">
        
        {/* Hero Section */}
        <section className="max-w-5xl">
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 md:items-center mb-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight flex-1">
               {role === 'ux' ? (
                   <>
                       Создаю продукты, <br/>
                       которые <span className="text-indigo-600">понимают людей</span>
                   </>
               ) : (
                   <>
                       Строю контент-системы <br/>
                       и <span className="text-indigo-600">управляю редакциями</span>
                   </>
               )}
            </h1>
            
            {/* Avatar with decorative ring */}
            <div className="relative shrink-0">
               <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-indigo-100 ring-1 ring-slate-100">
                  <Avatar className="w-full h-full">
                    <AvatarImage src={profilePhoto} alt="Profile" className="object-cover" />
                    <AvatarFallback className="text-2xl font-bold text-slate-400 bg-slate-100">СА</AvatarFallback>
                  </Avatar>
               </div>
               <div className={`absolute -bottom-2 -right-2 ${role === 'lead' ? 'bg-indigo-600' : 'bg-slate-900'} text-white p-2.5 rounded-full border-4 border-white shadow-lg transition-colors`}>
                  {role === 'ux' ? <PenTool size={20} /> : <Users size={20} />}
               </div>
            </div>
          </div>

          <div className="text-xl leading-relaxed max-w-3xl space-y-4">
            {role === 'ux' ? (
                <>
                    <p className="font-bold text-slate-800">
                    Поднял завершение опроса астмы с 8% до 67%, adherence в таблетнице ×4, рейтинг приложения +0.4.
                    </p>
                    <p className="text-slate-600">
                    4 кейса из Здоровья.ру, где я превращал медтермины в эмпатичный интерфейс.
                    </p>
                </>
            ) : (
                <>
                    <p className="font-bold text-slate-800">
                       Выстраиваю редполитики, нанимаю авторов и запускаю контент-процессы в продуктовых командах.
                    </p>
                    <p className="text-slate-600">
                       Опыт масштабирования редакции с 0 до 20+ человек, внедрение единого Tone of Voice и создание стандартов качества.
                    </p>
                </>
            )}
          </div>
        </section>

        {/* Dynamic Content Ordering */}
        {role === 'lead' ? (
            <>
                 {/* Skills First for Lead Role */}
                <section className="animate-in slide-in-from-bottom-8 duration-500">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                            <Layers size={20} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Навыки и процессы</h2>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>
                    <p className="text-lg text-slate-600 mb-12 max-w-3xl">
                        Мой подход к управлению редакцией: системность, метрики и масштабируемость.
                        Создаю среду, где авторы растут, а продукт говорит на одном языке.
                    </p>
                    <SkillsGrid />
                </section>

                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold text-slate-900">Продуктовые кейсы</h2>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>
                    <p className="text-slate-600 mb-8 max-w-2xl">
                        Не только руковожу, но и пишу руками. Примеры сложных интерфейсных задач, которые я решил:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <CaseCard 
                            title="Чат-бот Ева"
                            category="Conversational Design"
                            description="Онбординг в сложное медицинское приложение через легкий диалог."
                            icon={Bot}
                            color="purple"
                            onClick={() => onNavigate('chatbot')}
                        />
                        <CaseCard 
                            title="Репутация в сторах"
                            category="UX Scenarios"
                            description="Сценарий перехвата негатива и повышение рейтинга приложения."
                            icon={MessageSquare}
                            color="indigo"
                            onClick={() => onNavigate('feedback')}
                        />
                        <CaseCard 
                            title="PillTracker"
                            category="Tone of Voice"
                            description="Редизайн экрана настройки лекарств. Превращение технического языка в заботу."
                            icon={Heart}
                            color="rose"
                            onClick={() => onNavigate('pills')}
                        />
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                            <Type size={20} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Примеры микрокопии</h2>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>
                    <MicrocopyGallery />
                </section>
            </>
        ) : (
            <>
                {/* UX Cases First for UX Role */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold text-slate-900">Кейсы</h2>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <CaseCard 
                            title="Чат-бот Ева"
                            category="Conversational Design"
                            description="Онбординг в сложное медицинское приложение через легкий диалог. Как рассказать о функциях, не перегрузив пользователя."
                            icon={Bot}
                            color="purple"
                            onClick={() => onNavigate('chatbot')}
                        />
                        <CaseCard 
                            title="Репутация в сторах"
                            category="UX Scenarios"
                            description="Сценарий перехвата негатива. Как я заменил сухие алерты на заботливый диалог и повысил рейтинг приложения."
                            icon={MessageSquare}
                            color="indigo"
                            onClick={() => onNavigate('feedback')}
                        />
                        <CaseCard 
                            title="PillTracker"
                            category="Tone of Voice"
                            description="Редизайн экрана настройки лекарств. Превращение технического языка в заботливый интерфейс для пациентов."
                            icon={Heart}
                            color="rose"
                            onClick={() => onNavigate('pills')}
                        />
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                            <Type size={20} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Микрокопия и Tone of Voice</h2>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>
                    <p className="text-lg text-slate-600 mb-12 max-w-2xl">
                        Текст — это интерфейс. Я пишу пуши, которые хочется открыть, и сообщения об ошибках, которые не пугают, а помогают.
                    </p>
                    <MicrocopyGallery />
                </section>

                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                            <Layers size={20} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Навыки и процессы</h2>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>
                    <p className="text-lg text-slate-600 mb-12 max-w-3xl">
                        Умею не только писать тексты, но и выстраивать работу контент-команды. 
                        Закрываю полный цикл: от найма авторов и создания редполитики до выпуска материалов.
                    </p>
                    <SkillsGrid />
                </section>
            </>
        )}

        {/* Contacts */}
        <section>
           <ContactSection />
        </section>

      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 text-center text-slate-400 text-sm border-t border-slate-100 mt-20">
        © 2025 Саша Абрамов. {role === 'ux' ? 'Портфолио UX-редактора' : 'Портфолио Шеф-редактора'}.
      </footer>
    </div>
  );
}
