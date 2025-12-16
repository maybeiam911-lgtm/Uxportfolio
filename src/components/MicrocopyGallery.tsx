import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, Smartphone, ShoppingBag, Heart, WifiOff, RefreshCw, ChevronRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import appIcon from "figma:asset/a1bd918951dde8f1501f4e7a74036d039dca61dd.png";

// --- DATA: Edit this list to change your examples ---
const EXAMPLES = [
  {
    id: 'push-retention',
    type: 'push',
    category: 'Retention Push',
    title: 'Ева скучает',
    body: 'Вы не отмечали прием лекарств уже 3 дня. Все в порядке?',
    context: 'Отправляем пользователям, которые пропали на неделю.'
  },
  {
    id: 'push-value',
    type: 'push',
    category: 'Promo Push',
    title: 'Скидка на анализы 20%',
    body: 'Чекап всего организма по цене ужина в ресторане 🥦',
    context: 'Активация базы перед праздниками.'
  },
  {
    id: 'release-notes',
    type: 'release',
    category: 'Release Notes',
    version: '2.14.0',
    date: '2 дня назад',
    text: 'Исправили баг, из-за которого кнопка «Напомнить» пряталась, как кот от пылесоса. \n\nА еще добавили темную тему, чтобы ваши глаза отдыхали по вечерам. Попробуйте в настройках!',
    context: 'Превращаем скучные фиксы в историю.'
  },
  {
    id: 'empty-fav',
    type: 'empty',
    category: 'Empty State',
    icon: Heart,
    title: 'Здесь пока пусто',
    body: 'Добавляйте любимые статьи и лекарства в избранное, чтобы они всегда были под рукой',
    button: 'Перейти в каталог',
    context: 'Экран «Избранное» у нового юзера.'
  },
  {
    id: 'error-net',
    type: 'empty',
    category: 'Error Message',
    icon: WifiOff,
    title: 'Нет сети',
    body: 'Мы сохранили ваш черновик, попробуйте обновить страницу',
    button: 'Обновить',
    context: 'Потеря связи при заполнении формы.'
  }
];

// --- VISUALIZERS ---

const LockScreenView = ({ title, body }: any) => (
  <div className="w-full h-full bg-slate-900 relative flex flex-col items-center pt-20 text-white overflow-hidden">
     {/* Wallpaper Effect */}
     <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-slate-900 z-0" />
     
     {/* Time */}
     <div className="text-6xl font-thin tracking-wider z-10 mb-4 opacity-90">09:41</div>
     <div className="text-lg font-medium opacity-60 z-10 mb-12">Вторник, 12 декабря</div>

     {/* Notification */}
     <motion.div 
       initial={{ y: 20, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       key={title}
       className="w-[90%] bg-white/10 backdrop-blur-md rounded-2xl p-4 z-10 border border-white/10 shadow-xl"
     >
        <div className="flex items-center justify-between mb-2 opacity-70 text-xs uppercase tracking-wide">
            <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-[4px] bg-white flex items-center justify-center overflow-hidden">
                    <Avatar className="w-full h-full rounded-[4px]">
                        <AvatarImage src={appIcon} alt="Icon" className="object-cover" />
                        <AvatarFallback className="text-[8px] bg-indigo-600 text-white rounded-[4px]">З</AvatarFallback>
                    </Avatar>
                </div>
                <span>Здоровье.ру</span>
            </div>
            <span>Сейчас</span>
        </div>
        <div className="font-semibold text-[15px] mb-1">{title}</div>
        <div className="text-[15px] leading-snug opacity-90">{body}</div>
     </motion.div>
  </div>
);

const AppStoreView = ({ version, date, text }: any) => (
  <div className="w-full h-full bg-white relative flex flex-col pt-12 overflow-hidden">
     <div className="px-5 pb-4 border-b border-slate-100 flex justify-between items-end">
        <h3 className="text-2xl font-bold text-slate-900">Обновления</h3>
        <span className="text-indigo-600 font-medium text-sm">Все</span>
     </div>
     
     <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        key={version}
        className="p-5"
     >
        <div className="flex gap-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-2xl border border-slate-100 shrink-0 shadow-sm overflow-hidden p-1">
                 <Avatar className="w-full h-full rounded-xl">
                    <AvatarImage src={appIcon} alt="App Icon" className="object-contain" />
                    <AvatarFallback className="text-xl font-bold bg-indigo-50 text-indigo-600 rounded-xl">З</AvatarFallback>
                 </Avatar>
            </div>
            <div className="flex-1">
                <div className="font-semibold text-slate-900">Здоровье.ру</div>
                <div className="text-xs text-slate-500 mb-2">Вчера</div>
                <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wide">
                    Обновить
                </div>
            </div>
        </div>

        <div className="mb-2 flex items-center justify-between">
             <span className="font-bold text-slate-900 text-sm">Что нового</span>
             <span className="text-indigo-600 text-xs">История</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
            <span>Версия {version}</span>
            <span>•</span>
            <span>{date}</span>
        </div>
        
        <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans">
            {text}
        </div>
        <div className="mt-2 text-indigo-600 text-sm font-medium">еще</div>
     </motion.div>
  </div>
);

const EmptyStateView = ({ icon: Icon, title, body, button }: any) => (
  <div className="w-full h-full bg-white relative flex flex-col items-center justify-center p-8 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        key={title}
        className="flex flex-col items-center"
      >
        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-300">
            <Icon size={48} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed max-w-[240px] mb-8">
            {body}
        </p>
        <button className="px-6 py-3 bg-[#4B4FBF] text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-200 active:scale-95 transition-transform">
            {button}
        </button>
      </motion.div>
  </div>
);

// --- MAIN COMPONENT ---

export const MicrocopyGallery = () => {
  const [activeId, setActiveId] = useState(EXAMPLES[0].id);
  const activeItem = EXAMPLES.find(ex => ex.id === activeId) || EXAMPLES[0];

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:h-[600px] items-start">
        
        {/* Navigation List */}
        <div className="lg:col-span-5 flex flex-col h-full">
            <div className="space-y-3">
                {EXAMPLES.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveId(item.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group flex items-center justify-between ${
                            activeId === item.id 
                                ? 'bg-white border-indigo-200 shadow-md scale-[1.02]' 
                                : 'bg-transparent border-transparent hover:bg-slate-50'
                        }`}
                    >
                        <div>
                            <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                                activeId === item.id ? 'text-indigo-600' : 'text-slate-400'
                            }`}>
                                {item.category}
                            </div>
                            <div className={`font-medium ${
                                activeId === item.id ? 'text-slate-900' : 'text-slate-600'
                            }`}>
                                {item.title || `Версия ${item.version}`}
                            </div>
                        </div>
                        {activeId === item.id && (
                            <ChevronRight size={18} className="text-indigo-500 animate-in slide-in-from-left-2" />
                        )}
                    </button>
                ))}
            </div>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex-1">
                 <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    Контекст
                 </h4>
                 <p className="text-slate-600 text-sm leading-relaxed">
                    {activeItem.context}
                 </p>
            </div>
        </div>

        {/* Device Simulator */}
        <div className="lg:col-span-7 h-full min-h-[500px] flex items-center justify-center bg-slate-100 rounded-[40px] border border-slate-200 p-8 relative overflow-hidden group">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
            
            <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[50px] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.3)] border-[8px] border-slate-900 ring-1 ring-white/20 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
                {/* Dynamic Screen Content */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeItem.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full"
                    >
                        {activeItem.type === 'push' && (
                            <LockScreenView title={activeItem.title} body={activeItem.body} />
                        )}
                        {activeItem.type === 'release' && (
                            <AppStoreView version={activeItem.version} date={activeItem.date} text={activeItem.text} />
                        )}
                        {activeItem.type === 'empty' && (
                            <EmptyStateView 
                                icon={activeItem.icon} 
                                title={activeItem.title} 
                                body={activeItem.body} 
                                button={activeItem.button} 
                            />
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Status Bar Fake */}
                <div className="absolute top-0 left-0 right-0 h-6 z-50 flex justify-between px-6 items-center text-[10px] font-bold text-current mix-blend-difference opacity-50">
                    <span>9:41</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-current"/>
                    </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-50" />
            </div>
        </div>
    </div>
  );
};
