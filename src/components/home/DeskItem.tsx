import { useState } from 'react';
import { cn } from '@/lib/utils';

interface DeskItemProps {
  emoji: string;
  label: string;
  tooltip: string;
  className?: string;
  delay?: number;
}

export function DeskItem({ emoji, label, tooltip, className, delay = 0 }: DeskItemProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [typedText, setTypedText] = useState('');

  const handleClick = () => {
    setShowTooltip(true);
    setTypedText('');
    
    // Typewriter effect
    let index = 0;
    const interval = setInterval(() => {
      if (index < tooltip.length) {
        setTypedText(tooltip.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    // Auto-hide after animation completes + reading time
    setTimeout(() => {
      setShowTooltip(false);
    }, tooltip.length * 30 + 3000);
  };

  return (
    <div 
      className={cn("relative", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        onClick={handleClick}
        className="desk-item text-5xl md:text-6xl lg:text-7xl p-4 rounded-lg focus-ring bg-transparent"
        aria-label={label}
      >
        <span role="img" aria-hidden="true">{emoji}</span>
      </button>
      
      {showTooltip && (
        <div 
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 md:w-72 p-4 bg-card border-2 border-border rounded-lg shadow-folder z-10 animate-scale-in"
          role="tooltip"
        >
          <div className="font-cousine text-sm text-foreground">
            <span className="text-stamp font-bold">&gt; </span>
            {typedText}
            <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-4 h-4 bg-card border-r-2 border-b-2 border-border rotate-45" />
        </div>
      )}
    </div>
  );
}
