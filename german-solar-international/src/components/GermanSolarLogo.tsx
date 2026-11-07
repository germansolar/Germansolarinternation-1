import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export const GermanSolarLogo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'dark',
  compact = false 
}) => {
  const isLight = variant === 'light'; // Light logo for dark backgrounds

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official Real German Solar Sun Emblem (Green & White) */}
      <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 overflow-hidden rounded-xl shadow-xs border border-emerald-600/40 bg-[#047857] shrink-0">
        <img
          src="/assets/aistudio/german_solar_icon_badge_green.png"
          alt="German Solar International"
          className="w-full h-full object-cover block hover:scale-105 transition-transform duration-200"
        />
      </div>

      <div className="flex flex-col leading-tight">
        <span className={`text-[15px] sm:text-[16px] font-extrabold tracking-tight whitespace-nowrap ${isLight ? 'text-white' : 'text-slate-900'}`}>
          GERMAN SOLAR
        </span>
        {!compact && (
          <span className={`text-[9.5px] font-bold tracking-[0.22em] uppercase whitespace-nowrap ${isLight ? 'text-emerald-400' : 'text-emerald-700'}`}>
            INTERNATIONAL
          </span>
        )}
      </div>
    </div>
  );
};
