import React from "react";
import { ArrowLeft, Battery, Wifi, Signal, AlertTriangle, Clock, Info } from "lucide-react";

export function BeforeView() {
  return (
    <div className="relative w-full h-full bg-[#f8f9fa] text-slate-700 font-mono overflow-hidden border-4 border-slate-300">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
      />

      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-[44px] border-b border-dashed border-slate-300 flex items-center justify-between px-6 bg-slate-100">
        <span className="text-xs tracking-widest">09:41</span>
        <div className="flex gap-2 opacity-50">
          <Signal className="w-3 h-3" />
          <Wifi className="w-3 h-3" />
          <Battery className="w-3 h-3" />
        </div>
      </div>

      {/* Nav Bar - Cold/Technical */}
      <div className="absolute top-[44px] left-0 right-0 h-[56px] flex items-center px-4 border-b-2 border-slate-300 bg-white z-10">
        <div className="w-10 h-10 border border-slate-300 flex items-center justify-center mr-4 rounded-sm opacity-50">
          <ArrowLeft className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 uppercase">Экран 3.1</span>
          <span className="text-sm font-bold text-slate-600 uppercase">ПАРАМЕТРЫ_КУРСА</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[100px] bottom-[90px] left-0 right-0 overflow-y-auto p-4 space-y-6 bg-[#f8f9fa]">
        
        {/* Section 1: Frequency - Robotic */}
        <div className="border-2 border-slate-300 bg-white p-3 shadow-sm">
          <div className="text-[10px] font-bold text-slate-400 uppercase mb-2 border-b border-dashed border-slate-200 pb-1">
            Периодичность поступления
          </div>
          <div className="flex justify-between items-center p-2 bg-slate-50 border border-slate-200">
             <span className="text-xs font-bold">Интервал:</span>
             <span className="text-xs text-blue-800 font-mono underline">Ежесуточный цикл</span>
          </div>
        </div>

        {/* Section 2: Dosage - Confusing & Technical */}
        <div className="border-2 border-slate-300 bg-white p-3 shadow-sm">
           <div className="text-[10px] font-bold text-slate-400 uppercase mb-2 border-b border-dashed border-slate-200 pb-1">
            Тайминги и Дозировка
          </div>
          
          {/* Bad List Item */}
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-red-50 border border-red-200 p-2">
               <div className="flex items-center gap-2">
                 <div className="w-4 h-4 bg-red-200 rounded-full flex items-center justify-center text-[10px] font-bold text-red-800">-</div>
                 <span className="text-xs font-mono">T1: 09:00:00</span>
               </div>
               <span className="text-xs text-slate-500">1 ед. (таб)</span>
            </div>
            
            <div className="flex items-center justify-between bg-red-50 border border-red-200 p-2">
               <div className="flex items-center gap-2">
                 <div className="w-4 h-4 bg-red-200 rounded-full flex items-center justify-center text-[10px] font-bold text-red-800">-</div>
                 <span className="text-xs font-mono">T2: 10:00:00</span>
               </div>
               <span className="text-xs text-slate-500">1 ед. (таб)</span>
            </div>

            {/* Bad Button */}
            <div className="border border-dashed border-slate-400 p-2 flex items-center justify-center gap-2 text-slate-500 bg-slate-100 hover:bg-slate-200 cursor-pointer">
               <span className="text-lg font-bold">+</span>
               <span className="text-[10px] uppercase font-bold tracking-wider">Инициализировать слот</span>
            </div>
          </div>
          
          <div className="mt-2 flex items-start gap-1 text-[9px] text-slate-400 italic">
             <Info size={10} className="mt-0.5" />
             Убедитесь в корректности ввода временных меток во избежание сбоя расписания.
          </div>
        </div>

        {/* Section 3: Notifications - Scary */}
        <div className="border-2 border-slate-300 bg-white p-3 shadow-sm">
           <div className="text-[10px] font-bold text-slate-400 uppercase mb-2 border-b border-dashed border-slate-200 pb-1">
            Системные Алерты
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs">Триггер уведомления:</span>
            <div className="border border-slate-300 px-2 py-1 bg-slate-50 text-[10px]">
              T-15 min
            </div>
          </div>
          <div className="mt-2 text-[9px] text-slate-400">
            * Push-уведомление будет отправлено на устройство пользователя.
          </div>
        </div>

        {/* Section 4: Duration - Unclear */}
        <div className="border-2 border-slate-300 bg-white p-3 shadow-sm">
           <div className="text-[10px] font-bold text-slate-400 uppercase mb-2 border-b border-dashed border-slate-200 pb-1">
            Длительность терапии
          </div>
          <div className="flex justify-between items-center">
             <span className="text-xs">Без терминации</span>
             <div className="w-8 h-4 bg-slate-300 rounded-full relative">
                <div className="absolute right-0 top-0 w-4 h-4 bg-slate-500 rounded-full border border-white"></div>
             </div>
          </div>
        </div>

      </div>

      {/* Bottom Actions - Bureaucratic */}
      <div className="absolute bottom-0 left-0 right-0 h-[90px] border-t-2 border-slate-300 bg-white p-4 flex items-center justify-center shadow-[-4px_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="w-full h-12 bg-slate-700 text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center border-b-4 border-slate-900 active:border-b-0 active:translate-y-1">
           Сохранить изменения БД
        </div>
      </div>
    </div>
  );
}
