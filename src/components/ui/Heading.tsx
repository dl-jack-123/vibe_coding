import { forwardRef, ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'default' | 'gradient';
  className?: string;
  children: ReactNode;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 1, variant = 'default', className, children, ...props }, ref) => {
    const Tag = `h${level}` as ElementType;

    return (
      <Tag
        ref={ref}
        className={cn(
          'font-bold tracking-tight',
          variant === 'gradient'
            ? 'bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text'
            : 'text-white',
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = 'Heading';

export default Heading; 