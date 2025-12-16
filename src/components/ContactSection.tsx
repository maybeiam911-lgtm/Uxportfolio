import React from 'react';
import { Send, Coffee } from 'lucide-react';

export const ContactSection = () => (
  <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 text-center md:text-left relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-10 -ml-20 -mb-20" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 justify-between">
          <div className="max-w-xl">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                 <Coffee size={14} />
                 Обо мне
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Случайно вкатился в UX, <br/>
                  <span className="text-indigo-400">чтобы остаться</span>
               </h2>
               <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  До UX-редактуры я был выпускающим редактором. Случайно попробовал писать интерфейсы — и втянулся. 
                  <br/><br/>
                  Теперь совмещаю системный подход шеф-редактора с эмпатией UX-райтера. Знаю, как построить процесс контент-продакшна с нуля и не сойти с ума.
               </p>
          </div>

          <div className="shrink-0 text-center">
             <div className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-wide">
                 Напишите мне в Telegram
             </div>
             <a 
                href="https://t.me/nibenimenikukareku" 
                target="_blank" 
                rel="noreferrer"
                className="group relative inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-900/20"
             >
                <Send size={20} className="text-indigo-600 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                @nibenimenikukareku
             </a>
             <div className="mt-6 text-xs text-slate-500 max-w-[200px] mx-auto leading-tight">
                 Отвечаю быстро, если не пишу кейс для портфолио :)
             </div>
          </div>
      </div>
  </div>
);
