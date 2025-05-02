import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'default' | 'gradient';
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 1, variant = 'default', children, ...props }, ref) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
      <Tag
        ref={ref}
        className={cn(
          'font-bold tracking-tight',
          {
            'text-4xl md:text-5xl': level === 1,
            'text-3xl md:text-4xl': level === 2,
            'text-2xl md:text-3xl': level === 3,
            'text-xl md:text-2xl': level === 4,
            'text-lg md:text-xl': level === 5,
            'text-base md:text-lg': level === 6,
            'bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent':
              variant === 'gradient',
          },
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