import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, BookOpen, MoreHorizontal } from 'lucide-react';

// --- Assets & Styles ---
const COLOR_PRIMARY = "#4b4fbf";

// --- Components ---

const MessageBubble = ({ text, isUser = false, delay = 0 }: { text: React.ReactNode, isUser?: boolean, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.3 }}
    className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4 shrink-0`}
  >
    <div 
      className={`max-w-[85%] p-3.5 rounded-2xl text-[15px] leading-snug relative ${
        isUser 
          ? 'bg-[#ddf4c8] text-slate-900 rounded-tr-sm' 
          : 'bg-[#f2f2f2] text-slate-900 rounded-tl-sm'
      }`}
    >
      {text}
      <div className="text-[10px] text-slate-400 text-right mt-1 font-medium">09:00</div>
    </div>
  </motion.div>
);

const ActionButton = ({ label, onClick, variant = 'primary' }: { label: string, onClick: () => void, variant?: 'primary' | 'secondary' }) => (
  <motion.button
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`w-full py-3.5 rounded-xl font-medium text-[15px] mb-2 transition-colors ${
      variant === 'primary'
        ? 'bg-[#4b4fbf] text-white shadow-md shadow-indigo-200'
        : 'bg-[#e4e5f5] text-[#4b4fbf]'
    }`}
  >
    {label}
  </motion.button>
);

const ChartPlaceholder = () => (
  <div className="bg-white p-4 rounded-xl border border-slate-100 mb-2 mt-2 shrink-0">
     <div className="text-sm font-semibold text-slate-700 mb-1">Пример аналитики</div>
     <div className="text-xs text-slate-400 mb-4">Количество стула в день</div>
     <div className="flex items-end justify-between h-32 gap-2 px-2">
        {[2, 9, 4, 12, 8, 6, 3].map((h, i) => (
            <div key={i} className="flex flex-col items-center gap-1 flex-1">
                <div 
                  className="w-full bg-[#4b4fbf] rounded-t-sm opacity-90" 
                  style={{ height: `${h * 8}%` }} 
                />
                <span className="text-[10px] text-slate-400">
                    {['Пн','Вт','Ср','Чт','Пт','Сб','Вс'][i]}
                </span>
            </div>
        ))}
     </div>
  </div>
);

const LibraryPreview = () => (
    <div className="bg-white rounded-xl border border-slate-100 overflow-hidden mb-2 mt-2 shrink-0">
        <div className="h-24 bg-indigo-50 flex items-center justify-center">
            <BookOpen size={32} className="text-indigo-300"/>
        </div>
        <div className="p-3">
            <div className="text-xs font-bold text-slate-800 mb-1">Питание при ВЗК</div>
            <div className="text-[10px] text-slate-500 line-clamp-2">
                Как составить рацион, чтобы избежать обострений? Рекомендации гастроэнтерологов...
            </div>
        </div>
    </div>
);

// --- Main Simulator ---

export const ChatBotSimulator = ({ onComplete }: { onComplete?: () => void }) => {
  const [step, setStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
        setTimeout(() => {
            scrollRef.current?.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }, 100);
    }
  }, [step]);

  return (
    <div className="relative w-full h-full bg-white font-sans flex flex-col overflow-hidden">
      
      {/* Header */}
      <div className="h-[100px] pt-[44px] pb-2 px-4 bg-white border-b border-slate-100 flex items-center justify-between shrink-0 z-10">
        <ChevronLeft className="text-slate-800" />
        <div className="flex flex-col items-center">
          <span className="text-[16px] font-semibold text-slate-900">Ева</span>
          <span className="text-[12px] text-slate-400">Виртуальный помощник</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
            E
        </div>
      </div>

      {/* Chat Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 pb-40 bg-white relative">
        
        {/* Step 0: Intro */}
        <MessageBubble 
            delay={0.2}
            text={<span>Привет! Моя любимая работа — заботиться о людях. А заботиться о вас мне особенно приятно.<br/><br/>Расскажу, как все устроено.</span>} 
        />
        
        {step >= 1 && (
            <>
                <MessageBubble isUser text="Начнем" />
                <MessageBubble 
                    delay={0.5}
                    text={<span>Чтобы не пропустить прием лекарств или не принять лишнего, воспользуйтесь Дневником. Он сам обо всем напомнит.<br/><br/>Настроить Дневник сейчас?</span>} 
                />
            </>
        )}

        {step >= 2 && (
             <>
                <MessageBubble isUser text="В другой раз" />
                <MessageBubble 
                    delay={0.5}
                    text={<span>Каждая запись в Дневнике — большой шаг вперед.<br/><br/>Аналитика покажет частоту и характер приступов. Этим тоже можно поделиться с врачом — даже онлайн.</span>} 
                />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <ChartPlaceholder />
                </motion.div>
             </>
        )}

        {step >= 3 && (
            <>
                 <MessageBubble isUser text="Дальше" />
                 <MessageBubble 
                    delay={0.5}
                    text={<span>Библиотека — это сборник статей и видео от практикующих врачей. Поможет разобраться в питании, образе жизни и вариантах лечения.<br/><br/>Посмотрим?</span>} 
                 />
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <LibraryPreview />
                </motion.div>
            </>
        )}

        {step >= 4 && (
            <div className="relative mt-8">
                 {/* Blurry future content to show scale */}
                 <div className="opacity-40 blur-[2px] pointer-events-none select-none grayscale-[0.5]">
                    <MessageBubble isUser text="Дальше" />
                    <MessageBubble text={<span>Отлично! Теперь давайте настроим ваш профиль питания. Есть ли у вас аллергии?</span>} />
                    <MessageBubble text={<span>Я могу напоминать вам пить воду. Настроить уведомления?</span>} />
                 </div>
                 
                 {/* Overlay badge */}
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center z-10"
                 >
                    <div className="bg-slate-900/80 backdrop-blur-md text-white px-6 py-3 rounded-full text-xs font-bold shadow-xl flex items-center gap-2">
                        <MoreHorizontal size={16}/>
                        Еще 15 шагов онбординга
                    </div>
                 </motion.div>
            </div>
        )}

      </div>

      {/* Controls Area (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-50 z-20">
         <AnimatePresence mode="wait">
            {step === 0 && (
                <motion.div key="s0" exit={{ opacity: 0, y: 20 }}>
                    <ActionButton label="Начнем" onClick={() => setStep(1)} />
                </motion.div>
            )}
            
            {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
                    <ActionButton label="Настроить Дневник лекарств" onClick={() => {}} />
                    <ActionButton label="В другой раз" onClick={() => setStep(2)} variant="secondary" />
                </motion.div>
            )}

            {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
                    <ActionButton label="Дальше" onClick={() => setStep(3)} variant="secondary" />
                </motion.div>
            )}

             {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
                    <ActionButton label="Открыть Библиотеку" onClick={() => {}} />
                    <ActionButton label="Дальше" onClick={() => setStep(4)} variant="secondary" />
                </motion.div>
            )}

            {step === 4 && (
                 <motion.div key="s4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-2 justify-center">
                    <ActionButton label="Сбросить демо" onClick={() => setStep(0)} variant="secondary" />
                 </motion.div>
            )}
         </AnimatePresence>
      </div>

    </div>
  );
};
