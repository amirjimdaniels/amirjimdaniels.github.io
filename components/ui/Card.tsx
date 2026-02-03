'use client';

import { ReactNode, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref' | 'children'> {
  hover?: boolean;
  gradient?: boolean;
  children?: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', hover = true, gradient = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-xl overflow-hidden';
    const glassStyles = 'glass';
    const gradientStyles = gradient ? 'gradient-border' : '';
    const hoverStyles = hover ? 'hover:border-primary-500/50 transition-all duration-300' : '';

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={hover ? { y: -5 } : undefined}
        className={`${baseStyles} ${glassStyles} ${gradientStyles} ${hoverStyles} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
