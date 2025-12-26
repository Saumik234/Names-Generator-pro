
import React from 'react';

interface AdPlaceholderProps {
  className?: string;
  sizeLabel: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = '', sizeLabel }) => {
  return (
    <div
      className={`bg-green-100/50 border-2 border-dashed border-green-400 rounded-lg flex items-center justify-center text-green-700 min-h-[90px] w-full ${className}`}
    >
      <div className="text-center p-2">
        <p className="font-semibold">Ad Placeholder</p>
        <p className="text-sm">({sizeLabel})</p>
      </div>
    </div>
  );
};

export default React.memo(AdPlaceholder);