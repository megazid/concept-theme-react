import React, { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  columns?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
  className?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  columns = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 'gap-4 md:gap-6',
  className = '',
}) => {
  // Generate column classes based on provided configuration
  const getColumnClasses = () => {
    const baseClass = `grid`;
    
    const colClasses = [
      `grid-cols-${columns.default}`,
      columns.sm && `sm:grid-cols-${columns.sm}`,
      columns.md && `md:grid-cols-${columns.md}`,
      columns.lg && `lg:grid-cols-${columns.lg}`,
      columns.xl && `xl:grid-cols-${columns.xl}`,
    ].filter(Boolean).join(' ');
    
    return `${baseClass} ${colClasses} ${gap} ${className}`;
  };

  return (
    <div className={getColumnClasses()}>
      {children}
    </div>
  );
};

export default Grid; 