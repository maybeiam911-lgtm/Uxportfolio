import React from 'react';
import { cn } from "../components/ui/utils";

interface PhoneFrameProps {
  children: React.ReactNode;
  label: string;
  description?: string;
  className?: string;
}

export function PhoneFrame({ children, label, description, className }: PhoneFrameProps) {
  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">{label}</h3>
        {description && <p className="text-sm text-gray-500 font-medium">{description}</p>}
      </div>
      
      {/* Phone Bezel */}
      <div className="relative w-[375px] h-[812px] bg-white rounded-[50px] shadow-2xl border-[12px] border-gray-900 overflow-hidden ring-1 ring-black/5">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-8 bg-gray-900 z-50 rounded-b-[20px] w-1/2 mx-auto"></div>
        
        {/* Content Container */}
        <div className="w-full h-full relative bg-white overflow-hidden">
          {children}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 inset-x-0 h-1 bg-black/20 w-1/3 mx-auto rounded-full z-50 pointer-events-none"></div>
      </div>
    </div>
  );
}
