import React, { useState } from 'react';
import { Star, X, ChevronRight, AlertCircle, ThumbsUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
// Импорт вашего макета из Figma для сценария успеха
import SuccessScreenFromFigma from '../imports/Home-9-6454';

// --- Assets & Data ---
const TAGS = [
  "Баги и ошибки",
  "Неудобно пользоваться",
  "Чего-то не хватает",
  "Дизайн",
  "Другое"
];

// --- Shared UI Components ---

const Button = ({ children, onClick, variant = 'primary', className = '' }: any) => (
  <button 
    onClick={onClick}
    className={`w-full py-3 rounded-xl font-medium text-sm transition-all active:scale-95 ${
      variant === 'primary' 
        ? 'bg-[#4B4FBF] text-white shadow-lg shadow-indigo-200' 
        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
    } ${className}`}
  >
    {children}
  </button>
);

const Header = ({ title, showBack, onBack }: any) => (
  <div className="h-[50px] flex items-center px-4 bg-white border-b border-slate-50 relative shrink-0">
    {showBack && (
      <button onClick={onBack} className="absolute left-4 p-1 hover:bg-slate-50 rounded-full">
        {/* Using simple text arrow or icon here if needed, but keeping styling minimal for internal components */}
        ←
      </button>
    )}
    <h2 className="w-full text-center text-[16px] font-semibold text-slate-800">{title}</h2>
  </div>
);

// --- Sub-Screens ---

const RatingScreen = ({ onRate, onClose }: any) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-[2px]">
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        className="bg-white w-full rounded-t-[24px] p-6 pb-10 relative"
      >
        <button onClick={onClose} className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-600">
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center mt-2">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Как вам приложение?</h3>
          <p className="text-sm text-slate-500 mb-8 max-w-[240px]">
            Будем рады, если оставите оценку
          </p>

          <div className="flex gap-3 mb-10">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                onClick={() => onRate(star)}
                className="transition-transform hover:scale-110 active:scale-90"
              >
                <Star 
                  size={36} 
                  className={`${
                    star <= hovered ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200 fill-slate-100'
                  } transition-colors duration-200`} 
                  strokeWidth={1.5}
                />
              </button>
            ))}
          </div>

          <button onClick={onClose} className="text-[#4B4FBF] font-medium text-sm">
            Не сейчас
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const NegativeFeedbackScreen = ({ onClose, onNext }: any) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-[2px]">
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        className="bg-white w-full rounded-t-[24px] p-6 pb-10 relative"
      >
        <button onClick={onClose} className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-600">
          <X size={20} />
        </button>

        <div className="flex flex-col items-center mt-2 w-full">
          <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">Расскажите, что не так?</h3>
          <p className="text-sm text-slate-500 mb-6 text-center">
            Ваш отзыв поможет улучшить приложение
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8 w-full">
            {TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="w-full space-y-3">
             <Button onClick={onNext} variant={selectedTags.length > 0 ? 'primary' : 'secondary'}>
               Оставить отзыв
             </Button>
             
             <button onClick={onClose} className="w-full py-2 text-[#4B4FBF] font-medium text-sm">
                Не сейчас
             </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FormScreen = ({ onBack, onSubmit }: any) => {
  return (
    <motion.div 
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="absolute inset-0 bg-white z-40 flex flex-col h-full"
    >
      <div className="bg-white pt-[44px]"> {/* Fake status bar spacing */}
          <Header title="Обратная связь" showBack onBack={onBack} />
      </div>

      <div className="p-4 space-y-6 flex-1 bg-white overflow-y-auto">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Ваше сообщение</label>
          <div className="text-sm text-slate-400 mb-2">Если что-то идет не так — напишите нам, мы разберемся</div>
          <textarea 
            className="w-full h-32 bg-slate-50 rounded-xl p-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
            placeholder="Опишите проблему..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email для связи</label>
           <div className="text-sm text-slate-400 mb-2">Укажите адрес, мы ответим туда</div>
          <input 
            type="email"
            className="w-full bg-slate-50 rounded-xl p-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            placeholder="example@mail.com"
          />
        </div>
      </div>

      <div className="p-4 border-t border-slate-100 pb-8">
        <Button onClick={onSubmit}>
          Отправить
        </Button>
      </div>
    </motion.div>
  );
};

// --- Main Flow Component ---

export const MobileFlow = ({ onStepChange }: { onStepChange: (step: string) => void }) => {
  const [view, setView] = useState<'dashboard' | 'form' | 'success_static'>('dashboard');
  const [modal, setModal] = useState<'none' | 'rating' | 'negative' | 'success'>('rating');

  const handleRate = (rating: number) => {
    if (rating <= 3) {
      setModal('negative');
      onStepChange('negative');
    } else {
      // Show Figma screen logic
      setModal('none');
      setView('success_static'); // Switch main view to the Figma import
      onStepChange('success');
      
      // Reset after 4 seconds for demo purposes
      setTimeout(() => {
        setView('dashboard');
        onStepChange('dashboard');
      }, 4000);
    }
  };

  const handleTagsNext = () => {
    setModal('none');
    setView('form');
    onStepChange('form');
  };

  const handleFormSubmit = () => {
    setModal('success');
    setView('dashboard');
    onStepChange('success');
    setTimeout(() => {
        setModal('none');
        onStepChange('dashboard');
    }, 2000);
  };

  // If showing the Figma import, render it full screen
  if (view === 'success_static') {
      return (
        <div className="w-full h-full relative overflow-hidden bg-white">
            <SuccessScreenFromFigma />
             <button 
                onClick={() => { setView('dashboard'); onStepChange('dashboard'); }}
                className="absolute top-12 right-6 z-[100] bg-white/50 p-2 rounded-full"
            >
                <X size={20}/>
            </button>
        </div>
      );
  }

  return (
    <div className="relative w-full h-full bg-[#FAFAFA] overflow-hidden font-sans select-none">
      {/* Fake Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-[44px] flex justify-between items-end px-6 pb-2 z-50 text-slate-900 font-medium text-xs">
        <span>09:41</span>
        <div className="flex gap-1.5 items-center">
            <div className="w-4 h-2.5 border border-slate-300 rounded-[2px] relative">
                <div className="absolute inset-0.5 bg-slate-800 rounded-[1px] w-[60%]" />
            </div>
        </div>
      </div>

      <AnimatePresence>
        {view === 'dashboard' && (
           <motion.div 
             className="pt-[44px] h-full flex flex-col"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
           >
             {/* Header */}
             <div className="px-5 pt-2 pb-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-800">Доброе утро!</h1>
             </div>

             {/* Pills Scroll */}
             <div className="pl-5 overflow-x-hidden mb-8">
                <h2 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                    Мои лекарства <ChevronRight size={18} className="text-slate-400"/>
                </h2>
                <div className="flex gap-3 opacity-50 pointer-events-none">
                    {/* Simulated visual of calendar strip */}
                    {[14,15,16,17,18,19].map((d, i) => (
                        <div key={d} className={`w-[45px] h-[60px] rounded-xl flex flex-col items-center justify-center ${i===3 ? 'bg-slate-800 text-white shadow-lg' : 'bg-white text-slate-400 border border-slate-100'}`}>
                            <span className="text-[10px] mb-1">П</span>
                            <span className="font-bold text-sm">{d}</span>
                        </div>
                    ))}
                </div>
             </div>

             {/* Add Button */}
             <div className="px-5 mb-8">
                <div className="w-full py-4 bg-[#e4e5f5]/50 rounded-xl text-[#4B4FBF] font-medium text-center text-sm border border-[#e4e5f5]">
                    Добавить препарат
                </div>
             </div>

             {/* Articles */}
             <div className="pl-5 overflow-x-hidden flex gap-4">
                 <div className="w-[140px] h-[180px] bg-red-50 rounded-2xl p-4 flex flex-col justify-end pb-4 shrink-0 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-3"><div className="w-8 h-8 bg-red-100 rounded-full"/></div>
                     <span className="text-xs font-bold text-slate-700 z-10">Пользуйтесь ингалятором правильно</span>
                 </div>
                 <div className="w-[140px] h-[180px] bg-blue-50 rounded-2xl p-4 flex flex-col justify-end pb-4 shrink-0 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-3"><div className="w-8 h-8 bg-blue-100 rounded-full"/></div>
                     <span className="text-xs font-bold text-slate-700 z-10">Приступ астмы?</span>
                 </div>
             </div>

           </motion.div>
        )}

        {view === 'form' && (
            <FormScreen 
                key="form"
                onBack={() => setView('dashboard')}
                onSubmit={handleFormSubmit}
            />
        )}
      </AnimatePresence>

      {/* Modals */}
      <AnimatePresence>
        {modal === 'rating' && (
            <RatingScreen 
                key="rating-modal"
                onRate={handleRate} 
                onClose={() => { setModal('none'); onStepChange('dashboard'); }} 
            />
        )}
        {modal === 'negative' && (
            <NegativeFeedbackScreen 
                key="negative-modal"
                onNext={handleTagsNext}
                onClose={() => { setModal('none'); onStepChange('dashboard'); }}
            />
        )}
        {modal === 'success' && (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 z-[60] flex items-center justify-center bg-white/90 backdrop-blur-sm"
             >
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <ThumbsUp size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Спасибо за отзыв!</h3>
                </div>
             </motion.div>
        )}
      </AnimatePresence>

      {/* Reset Control */}
      {modal === 'none' && view === 'dashboard' && (
          <button 
            onClick={() => { setModal('rating'); onStepChange('rating'); }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-medium shadow-xl z-10"
          >
            Сбросить демо
          </button>
      )}

      {/* Tab Bar (Static) */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-white border-t border-slate-100 flex items-start justify-around pt-3 pb-8 z-30">
         <div className="flex flex-col items-center gap-1 text-[#4B4FBF]">
             <div className="w-6 h-6 rounded bg-indigo-50 flex items-center justify-center"><AlertCircle size={16}/></div>
             <span className="text-[10px] font-medium">Главная</span>
         </div>
         <div className="flex flex-col items-center gap-1 text-slate-300">
             <div className="w-6 h-6 rounded bg-slate-50"/>
             <span className="text-[10px] font-medium">Запись</span>
         </div>
         <div className="flex flex-col items-center gap-1 text-slate-300">
             <div className="w-6 h-6 rounded bg-slate-50"/>
             <span className="text-[10px] font-medium">Чат</span>
         </div>
      </div>
    </div>
  );
};
